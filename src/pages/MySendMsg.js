import MyHeader from "../components/MyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./css/MySendMsg.css";

//dummydata
import dummyMsg from "../DummyData/MySendMsgData.json";
import api from "../utils/api";

const MySendMsg = () => {
  //편집 상태인지 체크하기
  const [isEdit, setIsEdit] = useState(false);

  const [mySendArr, SetMySendArr] = useState([]);
  console.log(mySendArr);

  useEffect(() => {
    api
      .get("http://localhost:8080/mzbeeper/mypage/sendmsglist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        SetMySendArr(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            취소
          </span>
        )}
      </div>

      <div>
        {mySendArr.map((it) => (
          <div>
            {isEdit && <input className="select_btn" type="checkbox" />}
            <div className="msg_area" key={it.msg_id}>
              <p className="send_time">Date : {it.create_date}</p>
              <p className="receiver">To : {it.readerNum}</p>
              <p className="send_msg">{it.msg}</p>
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
