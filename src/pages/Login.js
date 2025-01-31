// 보여질 첫 화면
// 로그인 박스가 있음
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  //id 입력
  const [loginId, setLoginId] = useState("");
  const onLoginIDChange = (e) => {
    setLoginId(e.target.value);
  };

  //pwd입력
  const [loginPwd, setLoginPwd] = useState("");
  const onLoginPwdChange = (e) => {
    setLoginPwd(e.target.value);
  };

  const onLoginSubmit = () => {
    axios
      .post(
        "http://localhost:8080/mzbeeper/login",
        {
          userId: loginId,
          userPwd: loginPwd,
        },
        {
          withCredentials: true, // ✅ Refresh Token을 쿠키에 저장하도록 설정
        }
      )
      .then((response) => {
        console.log(response);

        // https://developer-ping9.tistory.com/235
        console.log("accessToken", response.headers.accesstoken);
        localStorage.setItem("accessToken", response.headers.accesstoken);
        //localStorage.setItem("refreshToken", response.headers.refreshtoken);
        window.location.href = "/mybeeper";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <div className="home_title">
        <h2>MZ BEEPER</h2>
        <img className="beeper_img" src="/assets/pager.png" />
      </div>
      <div className="id_pwd_boxes">
        <div className="input_id_box">
          <span className="id_tag">ID</span>
          <input
            onChange={onLoginIDChange}
            placeholder={"아이디를 입력하세요"}
            className="id_box"
          />
        </div>
        <div className="input_pwd_box">
          <span className="pwd_tag">PWD</span>
          <input
            onChange={onLoginPwdChange}
            placeholder={"비밀번호를 입력하세요"}
            className="pwd_box"
            type="password"
          />
        </div>
      </div>
      <div className="register_login_btn">
        <button
          className="signup_btn"
          onClick={() => navigate("/mzbeeper/signup")}
        >
          SIGN UP
        </button>
        <button className="login_btn" onClick={onLoginSubmit}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
