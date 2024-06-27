import { useNavigate } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import "./css/MyPage.css";

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"마이페이지"} />
      </div>
      <div className="my_info_area">
        <h3>최나루미</h3>
        <h3>010-1234-5333</h3>
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
            <span
              onClick={() => {
                navigate("/mzbeeper/mypage/mygetmsg");
              }}
            >
              📥내가 받은 삐삐 메세지
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="logout_btn">로그아웃</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPage;
