import { useState, useCallback, useRef, useMemo } from "react";
import axios from "axios";
import axiosInstance from "../apis/axiosInstance";

const UPLOAD_STATUS = {
  IDLE: "idle",
  UPLOADING: "uploading",
  SUCCESS: "success",
  ERROR: "error",
};

const DEFAULT_OPTIONS = {
  maxSize: 5 * 1024 * 1024,
  allowedTypes: [
    "video/mp4",
    "video/quicktime",
    "video/x-msvideo",
    "video/webm",
  ],
  endpoint: "/api/v1/upload",
  onSuccess: null,
  onError: null,
  onProgress: null,
};

/**
 * 동영상 업로드를 위한 커스텀 훅
 * @param {Object} options - 업로드 옵션
 * @param {number} options.maxSize - 최대 파일 크기 (bytes, 기본값: 5MB)
 * @param {string[]} options.allowedTypes - 허용된 파일 타입 (MIME types)
 * @param {string} options.endpoint - 업로드 API 엔드포인트
 * @param {Function} options.onSuccess - 업로드 성공 시 콜백
 * @param {Function} options.onError - 업로드 실패 시 콜백
 * @param {Function} options.onProgress - 업로드 진행률 콜백
 * @returns {Object} 업로드 관련 상태 및 함수
 */
/**
 * 모바일/데스크톱 환경 감지
 */
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

const useUpload = (options = {}) => {
  const config = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);
  const [status, setStatus] = useState(UPLOAD_STATUS.IDLE);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isMobileDevice] = useState(() => isMobile());
  const [isDragOver, setIsDragOver] = useState(false);
  const abortControllerRef = useRef(null);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);

  const validateFile = useCallback(
    (file) => {
      if (!file) {
        return { valid: false, error: "파일이 선택되지 않았습니다." };
      }

      if (!config.allowedTypes.includes(file.type)) {
        return {
          valid: false,
          error: `지원하지 않는 파일 형식입니다. 허용된 형식: ${config.allowedTypes.join(", ")}`,
        };
      }

      if (file.size > config.maxSize) {
        const maxSizeMB = (config.maxSize / (1024 * 1024)).toFixed(2);
        return {
          valid: false,
          error: `파일 크기가 너무 큽니다. 최대 크기: ${maxSizeMB}MB`,
        };
      }

      return { valid: true, error: null };
    },
    [config.allowedTypes, config.maxSize],
  );

  const upload = useCallback(
    async (file, additionalData = {}) => {
      const validation = validateFile(file);
      if (!validation.valid) {
        setError(validation.error);
        setStatus(UPLOAD_STATUS.ERROR);
        if (config.onError) {
          config.onError(validation.error);
        }
        return;
      }

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();

      setStatus(UPLOAD_STATUS.UPLOADING);
      setProgress(0);
      setError(null);

      try {
        const formData = new FormData();
        formData.append("file", file);

        Object.keys(additionalData).forEach((key) => {
          formData.append(key, additionalData[key]);
        });

        const response = await axiosInstance.post(config.endpoint, formData, {
          signal: abortControllerRef.current.signal,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              setProgress(percentCompleted);
              if (config.onProgress) {
                config.onProgress(percentCompleted);
              }
            }
          },
        });

        setStatus(UPLOAD_STATUS.SUCCESS);
        setUploadedFile(response.data);
        setProgress(100);

        if (config.onSuccess) {
          config.onSuccess(response.data);
        }

        return response.data;
      } catch (err) {
        if (axios.isCancel(err)) {
          setStatus(UPLOAD_STATUS.IDLE);
          setProgress(0);
          return;
        }

        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "업로드 중 오류가 발생했습니다.";
        setError(errorMessage);
        setStatus(UPLOAD_STATUS.ERROR);

        if (config.onError) {
          config.onError(errorMessage);
        }

        throw err;
      }
    },
    [config, validateFile],
  );

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setStatus(UPLOAD_STATUS.IDLE);
    setProgress(0);
    setError(null);
  }, []);

  const reset = useCallback(() => {
    cancel();
    setUploadedFile(null);
  }, [cancel]);

  const openFileDialog = useCallback(
    (options = {}) => {
      if (!fileInputRef.current) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = options.accept || "video/*";
        input.multiple = options.multiple || false;

        if (isMobileDevice && options.capture) {
          input.capture = options.capture;
        }

        input.style.display = "none";
        document.body.appendChild(input);
        fileInputRef.current = input;

        const handleChange = (e) => {
          const file = e.target.files?.[0];
          if (file) {
            upload(file, options.additionalData);
          }
          if (input.parentNode) {
            input.parentNode.removeChild(input);
          }
          input.removeEventListener("change", handleChange);
          fileInputRef.current = null;
        };

        input.addEventListener("change", handleChange);
      }

      fileInputRef.current.click();
    },
    [isMobileDevice, upload],
  );

  const setupDragAndDrop = useCallback(
    (element) => {
      if (!element || isMobileDevice) {
        return;
      }

      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
      };

      const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
      };

      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
          const file = files[0];
          upload(file);
        }
      };

      element.addEventListener("dragover", handleDragOver);
      element.addEventListener("dragleave", handleDragLeave);
      element.addEventListener("drop", handleDrop);

      return () => {
        element.removeEventListener("dragover", handleDragOver);
        element.removeEventListener("dragleave", handleDragLeave);
        element.removeEventListener("drop", handleDrop);
      };
    },
    [isMobileDevice, upload],
  );

  return {
    status,
    progress,
    error,
    uploadedFile,
    isMobileDevice,
    isDragOver,
    isIdle: status === UPLOAD_STATUS.IDLE,
    isUploading: status === UPLOAD_STATUS.UPLOADING,
    isSuccess: status === UPLOAD_STATUS.SUCCESS,
    isError: status === UPLOAD_STATUS.ERROR,
    upload,
    openFileDialog,
    setupDragAndDrop,
    cancel,
    reset,
    validateFile,
    fileInputRef,
    dropZoneRef,
  };
};

export default useUpload;
export { UPLOAD_STATUS };
