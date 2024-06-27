import MyHeader from "../components/MyHeader";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/MsgDict.css";

const MsgDict = () => {
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
        <input className="dict_input" />
        <button className="dict_btn">검색</button>
      </div>
    </div>
  );
};

export default MsgDict;
