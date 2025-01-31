import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // ✅ Refresh Token 자동 포함 (쿠키 사용)
});

api.interceptors.request.use(
  // 서버로 요청을 보낼 때 가로챈다
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      //accesstoken이 있다면
      // header에 authorization이란 필드를 추가해서
      // 헤더의 값은 `Bearer <accessToken>` 형식으로 설정됩니다.
      // 클라이언트에서 요청할 때에만 bearer를 사용한다고 함
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config; // 원래 요청을 가져오기
    if (error.response.status == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      //const refreshToken = localStorage.getItem("refreshToken");

      try {
        const response = await api.post(
          "http://localhost:8080/mzbeeper/refresh"
        );

        const newAccessToken = response.headers["accesstoken"];
        //const newRefreshToken = response.headers["refreshtoken"];

        if (newAccessToken) {
          localStorage.setItem("accessToken", newAccessToken);
        }
        // if (newRefreshToken) {
        //   localStorage.setItem("refreshToken", newRefreshToken);
        // }

        // 🔹 원래 요청에 새로운 Access Token 추가 후 다시 요청
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (err) {
        console.log(err);
        console.error("Refresh token is expired or invalid"); // refreshtoken도 만료
        localStorage.removeItem("accessToken"); // 삭제
        //localStorage.removeItem("refreshToken");
        alert("다시 로그인 해주세요");
        window.location.href = "/mzbeeper"; // 로그인 페이지로 리다이렉트
      }
    }

    return Promise.reject(error);
  }
);

export default api;
