import MyHeader from "../components/MyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./css/MyGetMsg.css";

//dummydata
import dummyMsg from "../DummyData/MyGetMsgData.json";

const MyGetMsg = () => {
  //편집 상태인지 체크하기
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div>
        <MyHeader headerback={true} headertext={"내가 보낸 삐삐 메세지"} />
      </div>
      <div className="edit_btn_area2">
        {!isEdit && (
          <FontAwesomeIcon
            className="edit_btn2"
            icon={faGear}
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          />
        )}
      </div>
      <div className="real_edit_area2">
        {isEdit && <input className="all_checked_box2" type="checkbox" />}
        {isEdit && (
          <span
            className="edit_cancle_btn2"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            편집 취소
          </span>
        )}
      </div>

      <div>
        {dummyMsg.MyGetMsg.map((it) => (
          <div>
            {isEdit && <input className="select_btn2" type="checkbox" />}
            <div className="msg_area2" key={it.id}>
              <p className="send_time2">Date : {it.sendTime}</p>
              <p className="send_msg2">{it.sendMsg}</p>
            </div>
          </div>
        ))}
      </div>
      {isEdit && (
        <footer>
          <button className="delete_btn2">삭제하기</button>
        </footer>
      )}
    </div>
  );
};

export default MyGetMsg;
