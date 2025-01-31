import { useNavigate } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import "./css/MyPage.css";
import { useEffect, useState } from "react";
import api from "../utils/api";

const MyPage = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("http://localhost:8080/mzbeeper/myinfo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setName(response.data.name);
        setNum(response.data.beeperNum);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logOut = () => {
    api
      .get("http://localhost:8080/mzbeeper/logout")
      .then(() => {
        localStorage.removeItem("accessToken"); // 삭제
        window.location.href = "/mzbeeper";
      })
      .catch((error) => {
        console.error("로그아웃 오류:", error);
      });
  };

  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"마이페이지"} />
      </div>
      <div className="my_info_area">
        <h3>{name}</h3>
        <h3>📟 {num}</h3>
      </div>
      <hr />
      <div className="mypage_msg_area">
        <ul>
          <li>
            <span
              onClick={() => {
                navigate("/mzbeeper/mypage/mysendmsg");
              }}
            >
              📤내가 보낸 삐삐 메세지
            </span>
          </li>
        </ul>

        <ul>
          <li>
            <span onClick={logOut} className="logout_btn">
              로그아웃
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPage;
