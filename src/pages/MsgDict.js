import MyHeader from "../components/MyHeader";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/MsgDict.css";
import { useState } from "react";
import axios from "axios";

const MsgDict = () => {
  const [searchNum, setSearchNum] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [msgMeant, setMsgMeant] = useState("");

  console.log("searchNum : " + searchNum);
  const onSearchChange = (e) => {
    setSearchNum(e.target.value);
  };

  const onSearch = () => {
    axios
      .get(`http://localhost:8080/mzbeeper/dict?search=${searchNum.toString()}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);

        setShowResult(true);
        setMsgMeant(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"삐삐 암호 사전"} />
      </div>
      <div className="explain_input">
        <h4>상대에게 받은 암호를 검색해보세요!</h4>
      </div>
      <div className="input_area">
        <FontAwesomeIcon className="dict_img" icon={faMagnifyingGlass} />
        <input onChange={onSearchChange} className="dict_input" />
        <button onClick={onSearch} className="dict_btn">
          검색
        </button>
      </div>
      <div>
        {showResult && (
          <div className="searchResult">
            <p className="msgNumber">{msgMeant.dict_msg}</p>
            <p className="msgMeant">{msgMeant.dict_meant}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MsgDict;
