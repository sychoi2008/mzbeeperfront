import { useNavigate } from "react-router-dom";
import MyDialButton from "../components/MyDialButton";
import MyHeader from "../components/MyHeader";
import "./css/WriteNum.css";
import { useState } from "react";

const WriteNum = () => {
  const navigator = useNavigate();

  const nextPage = () => {
    navigator("/mzbeeper/writemsg", { state: inputNum });
  };

  const [inputNum, setInputNum] = useState("");

  // 버튼을 누르면 숫자가 input 창에 띌
  const revealNum = (e) => {
    setInputNum((prev) => prev + e.target.value);
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
          <h2>상대방 번호 입력</h2>
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
            <button onClick={nextPage} className="direct_btn">
              {"NEXT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteNum;
