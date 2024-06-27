import { useState } from "react";
import "./css/MyDialButton.css";

const MyDialButton = ({ dialbtntext, dialfunc }) => {
  const [inputNum, setInputNum] = useState("");

  // 버튼을 누르면 숫자가 input 창에 띌
  const revealNum = (e) => {
    setInputNum((prev) => prev + e.target.value);
  };

  const deleteAll = () => {
    setInputNum("");
  };

  return (
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
        <button onClick={dialfunc} className="direct_btn">
          {dialbtntext}
        </button>
      </div>
    </div>
  );
};

export default MyDialButton;
