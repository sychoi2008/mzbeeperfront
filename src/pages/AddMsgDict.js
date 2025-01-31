import MyHeader from "../components/MyHeader";
import "./css/MsgDict.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const AddMsgDict = ({ currentUser }) => {
  const [msg, setMsg] = useState("");
  const [meaning, setMeaning] = useState("");
  const navigate = useNavigate();
  console.log(msg);

  const onAddDict = () => {
    api
      .post(`http://localhost:8080/mzbeeper/dict/add`, {
        msg: msg,
        meaning: meaning,
      })
      .then(() => {
        alert("삐삐 암호가 등록되었습니다!");
        navigate("/mzbeeper/dict");
      })
      .catch((err) => {
        console.log("삐삐 암호 등록 오류:", err);
      });
  };

  return (
    <div>
      <div>
        <MyHeader headerback={true} headertext={"삐삐 암호 등록"} />
      </div>
      <div className="explain_input">
        <h4>새로운 삐삐 암호를 등록하세요!</h4>
      </div>
      <div className="input_area">
        <input
          type="text"
          placeholder="삐삐 암호 입력"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="dict_input"
        />
      </div>
      <div className="input_area">
        <input
          type="text"
          placeholder="암호 의미 입력"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          className="dict_input"
        />
      </div>
      <div className="addMsgDictButton">
        <button onClick={onAddDict} className="dict_add_btn">
          삐삐 암호 등록
        </button>
      </div>
    </div>
  );
};

export default AddMsgDict;
