import "./css/MyHeader.css";
import {
  faBars,
  faClose,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyHeader = ({ headerback, headertext }) => {
  const [toggle, setToggle] = useState(false);
  const onIconClick = useCallback(() => {
    setToggle((p) => !p);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className={headerback ? "back_show" : "back_hide"}>
          {headerback && (
            <FontAwesomeIcon
              className="back_real"
              icon={faChevronLeft}
              onClick={() => {
                navigate(-1);
              }}
            />
          )}
        </div>
        <div className={headerback ? "text_center" : "text_start"}>
          {headertext}
        </div>
        <div className="menu_btn">
          <FontAwesomeIcon
            className="menu_real"
            icon={toggle ? faClose : faBars}
            onClick={onIconClick}
          />
        </div>
      </header>
      <div>
        {toggle && (
          <nav>
            <ul>
              <li>
                <span
                  onClick={() => {
                    navigate("/mybeeper");
                  }}
                >
                  📟내 삐삐 확인
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span
                  onClick={() => {
                    navigate("/mzbeeper/writenum");
                  }}
                >
                  🤙삐삐 보내기
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span
                  onClick={() => {
                    navigate("/mzbeeper/dict");
                  }}
                >
                  📖삐삐 암호 사전
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span
                  onClick={() => {
                    navigate("/mzbeeper/mypage");
                  }}
                >
                  👾마이페이지
                </span>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MyHeader;
