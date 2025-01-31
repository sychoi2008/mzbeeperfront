import { useState } from "react";
import api from "../utils/api";
import MyHeader from "../components/MyHeader";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const MsgDict = () => {
  const [searchNum, setSearchNum] = useState("");
  const [msgMeant, setMsgMeant] = useState([]);
  const [likedStatus, setLikedStatus] = useState({});
  const [showNull, setShowNull] = useState(false); // 결과가 없는 경우를 표시하는 상태 추가
  const navigate = useNavigate();

  const onSearchChange = (e) => {
    setSearchNum(e.target.value);
  };

  const onSearch = () => {
    if (!searchNum.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    api
      .get(`http://localhost:8080/mzbeeper/dict?search=${searchNum}`)
      .then((response) => {
        console.log("검색 결과:", response.data);

        if (response.data.length === 0) {
          setMsgMeant([]); // 검색 결과 초기화
          setShowNull(true); // "결과 없음" 표시
        } else {
          setMsgMeant(response.data);
          setShowNull(false); // 검색 결과가 있으면 "결과 없음" 숨김

          // 좋아요 상태 초기화
          const initialLikes = response.data.reduce((acc, msg) => {
            acc[msg.dict_msg] = msg.liked;
            return acc;
          }, {});
          setLikedStatus(initialLikes);
        }
      })
      .catch((err) => {
        console.log("검색 오류:", err);
        setShowNull(true); // 검색 오류 시 "결과 없음" 표시
      });
  };

  const toggleLike = (dictMsg) => {
    const isLiked = likedStatus[dictMsg]; // 현재 상태 가져오기
    console.log("현재 좋아요 상태 : " + isLiked);

    if (isLiked) {
      // 좋아요 취소 요청 (DELETE)
      api
        .delete(
          `http://localhost:8080/mzbeeper/dict/like?deletedMsg=${dictMsg}`
        )
        .then(() => {
          setLikedStatus((prev) => ({
            ...prev,
            [dictMsg]: false, // 상태 업데이트
          }));
        })
        .catch((err) => {
          console.log("좋아요 취소 오류:", err);
        });
    } else {
      // 좋아요 추가 요청 (POST)
      api
        .post("http://localhost:8080/mzbeeper/dict/like", {
          msg: dictMsg,
        })
        .then(() => {
          setLikedStatus((prev) => ({
            ...prev,
            [dictMsg]: true, // 상태 업데이트
          }));
        })
        .catch((err) => {
          console.log("좋아요 추가 오류:", err);
        });
    }
  };

  return (
    <div>
      <div>
        <MyHeader headerback={false} headertext={"삐삐 암호 사전"} />
      </div>
      <div className="explain_input">
        <h4>상대에게 받은 암호를 검색해보세요!</h4>
      </div>
      <div className="addMsgDictButton">
        <button
          onClick={() => navigate("/mzbeeper/dict/add")}
          className="dict_add_btn"
        >
          삐삐 암호 등록
        </button>
      </div>
      <div className="input_area">
        <FontAwesomeIcon className="dict_img" icon={faMagnifyingGlass} />
        <input onChange={onSearchChange} className="dict_input" />
        <button onClick={onSearch} className="dict_btn">
          검색
        </button>
      </div>

      <div>
        {msgMeant.length > 0
          ? msgMeant.map((msg, index) => (
              <div key={index} className="resultContent">
                <p>
                  {msg.dict_msg} - {msg.dict_meant}
                </p>
                <button
                  className={`likeButton ${
                    likedStatus[msg.dict_msg] ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(msg.dict_msg)}
                >
                  {likedStatus[msg.dict_msg] ? "♥" : "♡"}
                </button>
              </div>
            ))
          : showNull && (
              <div className="showNullERROR">
                <p>결과가 없습니다</p>
              </div>
            )}
      </div>
    </div>
  );
};

export default MsgDict;
