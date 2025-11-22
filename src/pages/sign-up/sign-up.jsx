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
  const [error, setError] = useState(false);

  // 입력 값 핸들링
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 회원가입 API
  const handleSubmit = async () => {
    console.log("클릭됨");
    const { success, data } = await postLogin(formData);

    if (success) {
      navigate("/main", { replace: true });
    } else {
      setError(true);
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
            onChange={(e) => handleFormData(e)}
            placeholder="닉네임 입력"
          />
          <Input
            type="password"
            value={formData.password}
            name="password"
            onChange={(e) => handleFormData(e)}
            placeholder="비밀번호 입력"
          />
          {error && (
            <div className={styles.error}>
              사용할 수 없는 닉네임입니다.(임시)
            </div>
          )}
        </div>
        <Button onClick={handleSubmit}>시작하기</Button>
      </div>
    </div>
  );
};
