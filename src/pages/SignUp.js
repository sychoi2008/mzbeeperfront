// 회원가입 페이지
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./css/SignUp.css";
import CryptoJS from "crypto-js";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

const SignUp = () => {
  const navigate = useNavigate();

  //name handler
  const [name, setName] = useState("");
  // e : event 객체
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  //id handler
  const [beepId, setBeepId] = useState("");
  const onChangeId = (e) => {
    setBeepId(e.target.value);
  };

  //pwd handler
  const [pwd, setPwd] = useState("");
  const onChagePwd = (e) => {
    setPwd(e.target.value);
  };

  //press the register button
  const onSubmit = () => {
    //pwd salt 생성
    const salt = (Math.random() * 10).toString(36).replace(".", "");
    console.log("salt", salt);
    //pwd + salt
    const finalPwd = pwd + salt;

    //pwd hashing
    const hash = CryptoJS.SHA256(finalPwd).toString(CryptoJS.enc.Hex);

    console.log("hash", hash);
    console.log(moment().format("YYYY-MM-DDTHH:mm:ss"));

    //server로는 salt와 hash value가 전달되어야 한다.
    axios
      .post("http://localhost:8080/mzbeeper/save", {
        name: name,
        id: beepId,
        hash_pwd: hash,
        salt: salt,
        create_date: moment().format("YYYY-MM-DDTHH:mm:ss"),
      })
      .then((response) => {
        navigate("/mzbeeper/welcome", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign_up">
      <div className="img_position">
        <img className="beeper_img" src="/assets/pager.png" />
      </div>
      <div className="boxes_area">
        <div className="name_area">
          <span>NAME </span>
          <input
            onChange={onChangeName}
            placeholder={"이름"}
            className="name_input"
          />
        </div>
        <div className="id_area">
          <span>ID </span>
          <input
            onChange={onChangeId}
            placeholder={"ID"}
            className="id_input"
          />
        </div>
        <div className="pwd_area">
          <span>PWD </span>
          <input
            onChange={onChagePwd}
            placeholder={"비밀번호"}
            type="password"
            className="pwd_input"
          />
        </div>
        <div className="btns">
          <button
            className="cancle_btn"
            onClick={() => {
              navigate("/mzbeeper/");
            }}
          >
            CANCLE
          </button>
          <button onClick={onSubmit} className="regist_btn">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
