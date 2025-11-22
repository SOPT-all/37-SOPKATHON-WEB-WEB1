import * as styles from "./sign-up.css";
import { Input } from "./../../components/input/input";
import { Button } from "./../../components/button/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { postLogin } from "../../apis/postLogin";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
  }); // 회원가입/로그인 데이터

  const [error, setError] = useState(""); // 에러 메시지 관리

  // 입력 값 핸들링
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 회원가입/로그인 API
  const handleSubmit = async () => {
    setError(""); // 기존 에러 초기화

    const { code, data, msg } = await postLogin(formData);

    if (code === 200) {
      const { memberId, nickname } = data;

      if (memberId != null) {
        localStorage.setItem("memberId", String(memberId));
      }
      if (nickname) {
        localStorage.setItem("nickname", nickname);
      }

      navigate("/main", { replace: true });
    } else {
      // 실패 시 서버에서 내려준 msg 사용
      setError(msg || "로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>회원가입</div>
      </header>
      <div className={styles.form}>
        <img className={styles.iconBox} src={logo} alt="로고" />
        <div className={styles.inputBox}>
          <Input
            type="text"
            value={formData.nickname}
            name="nickname"
            onChange={handleFormData}
            placeholder="닉네임 입력"
          />
          <Input
            type="password"
            value={formData.password}
            name="password"
            onChange={handleFormData}
            placeholder="비밀번호 입력"
          />
          {error && <div className={styles.error}>{error}</div>}
        </div>
        <Button onClick={handleSubmit}>시작하기</Button>
      </div>
    </div>
  );
};
