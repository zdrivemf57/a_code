import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

// リクエストインターセプターでトークンを自動追加
customAxios.interceptors.request.use(
  (config) => {
    // ローカルストレージからトークンを取得
    const loginMemberInStorage = JSON.parse(
      localStorage.getItem("loginMember")
    );

    const token = loginMemberInStorage?.token;
    if (token) {
      // ヘッダーにトークンを追加
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
