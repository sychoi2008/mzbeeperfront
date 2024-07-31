// 내 삐삐 확인하기
import axios from "axios";
import MyHeader from "../components/MyHeader";

import "./css/MyBeeper.css";
import api from "../utils/api";
import { useState } from "react";

const MyBeeper = () => {
  const [myMsg, setMyMsg] = useState("");
  const getMyMsg = () => {
    api
      .get("http://localhost:8080/mybeeper/getmymsg", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setMyMsg(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"내 삐삐 확인하기"} />
      </div>
      <div className="pager_area">
        <input value={myMsg} className="green_screen" readOnly />
        <button onClick={getMyMsg} className="pager_btn"></button>
      </div>
    </div>
  );
};

export default MyBeeper;
