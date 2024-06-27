import { useState } from "react";
import MyDialButton from "../components/MyDialButton";
import MyHeader from "../components/MyHeader";
import "./css/WriteMsg.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const WriteMsg = () => {
  // https://9x211x2.tistory.com/22
  const { state } = useLocation();
  console.log(state);
  const [inputNum, setInputNum] = useState("");

  // 버튼을 누르면 숫자가 input 창에 띌
  const revealNum = (e) => {
    setInputNum((prev) => prev + e.target.value);
  };

  //메세지 전송
  const onMsgSubmit = () => {
    // jwt token과 함께 보내기
    // 실패하면 로그인 화면(첫화면)으로 강제로 보내기
    // axios
    //   .post("http://localhost:8080/mzbeeper/send/msg", {
    //     userId: loginId,
    //     userPwd: loginPwd,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // https://developer-ping9.tistory.com/235
    //     console.log("accessToken", response.headers.accesstoken);
    //     localStorage.setItem("accessToken", response.headers.accesstoken);
    //     localStorage.setItem("refreshToken", response.headers.refreshtoken);
    //     window.location.href = "/mybeeper";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const deleteAll = () => {
    setInputNum("");
  };
  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"삐삐 보내기"} />
      </div>
      <div className="title_input_dial">
        <div className="num_title">
          <h2>메세지 입력</h2>
        </div>

        <div className="dial_buts">
          <div>
            <input className="msg_input" value={inputNum} />
          </div>
          <div className="num_buts">
            <div className="oneTothree">
              <button onClick={revealNum} value={1}>
                1
              </button>
              <button onClick={revealNum} value={2}>
                2
              </button>
              <button onClick={revealNum} value={3}>
                3
              </button>
            </div>
            <div className="fourTosix">
              <button onClick={revealNum} value={4}>
                4
              </button>
              <button onClick={revealNum} value={5}>
                5
              </button>
              <button onClick={revealNum} value={6}>
                6
              </button>
            </div>
            <div className="sevenTonine">
              <button onClick={revealNum} value={7}>
                7
              </button>
              <button onClick={revealNum} value={8}>
                8
              </button>
              <button onClick={revealNum} value={9}>
                9
              </button>
            </div>
            <div className="starToShap">
              <button onClick={revealNum} value="*">
                *
              </button>
              <button onClick={revealNum} value={0}>
                0
              </button>
              <button onClick={revealNum} value="#">
                #
              </button>
            </div>
          </div>
          <div className="next_cancel_btn">
            <button onClick={deleteAll} className="send_cancle_btn">
              {"지우기"}
            </button>
            <button
              onClick={() => {
                alert("hi!");
              }}
              className="direct_btn"
            >
              {"SEND"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteMsg;
