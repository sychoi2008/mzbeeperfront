// 내 삐삐 확인하기
import MyHeader from "../components/MyHeader";

import "./css/MyBeeper.css";

const MyBeeper = () => {
  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"내 삐삐 확인하기"} />
      </div>
      <div className="pager_area">
        <input className="green_screen" />
        <button className="pager_btn"></button>
      </div>
    </div>
  );
};

export default MyBeeper;
