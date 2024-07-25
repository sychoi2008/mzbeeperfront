import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp.js";
import GoToLogin from "./pages/GoToLogin.js";

import MyBeeper from "./pages/MyBeeper.js";
import WriteNum from "./pages/WriteNum.js";
import MsgDict from "./pages/MsgDict.js";
import MyPage from "./pages/MyPage.js";

import MySendMsg from "./pages/MySendMsg.js";
import MyGetMsg from "./pages/MyGetMsg.js";
import WriteMsg from "./pages/WriteMsg.js";

import Error from "./pages/Error.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/mzbeeper" element={<Login />} />
          <Route path="/mzbeeper/signup" element={<SignUp />} />
          <Route path="/mzbeeper/welcome" element={<GoToLogin />} />
        </Routes>

        <Routes>
          <Route path="/mybeeper" element={<MyBeeper />} />
          <Route path="/mzbeeper/writenum" element={<WriteNum />} />
          <Route path="/mzbeeper/writemsg" element={<WriteMsg />} />

          <Route path="/mzbeeper/dict" element={<MsgDict />} />
          <Route path="mzbeeper/mypage" element={<MyPage />} />
        </Routes>

        <Routes>
          <Route path="/mzbeeper/mypage/mysendmsg" element={<MySendMsg />} />
          <Route path="/mzbeeper/mypage/mygetmsg" element={<MyGetMsg />} />
        </Routes>

        <Routes>
          <Route path="/mzbeeper/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
