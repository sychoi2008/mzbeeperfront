import MyHeader from "../components/MyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./css/MySendMsg.css";

//dummydata
import dummyMsg from "../DummyData/MySendMsgData.json";

const MySendMsg = () => {
  //편집 상태인지 체크하기
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div>
        <MyHeader headerback={true} headertext={"내가 보낸 삐삐 메세지"} />
      </div>
      <div className="edit_btn_area">
        {!isEdit && (
          <FontAwesomeIcon
            className="edit_btn"
            icon={faGear}
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          />
        )}
      </div>
      <div className="real_edit_area">
        {isEdit && <input className="all_checked_box" type="checkbox" />}
        {isEdit && (
          <span
            className="edit_cancle_btn"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            편집 취소
          </span>
        )}
      </div>

      <div>
        {dummyMsg.MySendMsg.map((it) => (
          <div>
            {isEdit && <input className="select_btn" type="checkbox" />}
            <div className="msg_area" key={it.id}>
              <p className="send_time">Date : {it.sendTime}</p>
              <p className="receiver">To : {it.receiver}</p>
              <p className="send_msg">{it.sendMsg}</p>
            </div>
          </div>
        ))}
      </div>
      {isEdit && (
        <footer>
          <button className="delete_btn">삭제하기</button>
        </footer>
      )}
    </div>
  );
};

export default MySendMsg;
