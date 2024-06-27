// 회원가입 완료 페이지.
import "./css/GoToLogin.css";
import { useNavigate } from "react-router-dom";

// 바로 홈버튼으로 갈 수 있게 버튼 생성
const GoToLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome_page">
      <div>
        <h2 className="welcome_text">
          Welcome <br /> To
          <br /> MZ BEEPER
        </h2>
      </div>
      <div>
        <img className="beeper_img" src="/assets/pager.png" />
      </div>
      <div>
        <button
          className="welcome_btn"
          onClick={() => {
            navigate("/mzbeeper");
          }}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default GoToLogin;
