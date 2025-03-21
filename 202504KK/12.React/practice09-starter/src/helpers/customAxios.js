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
    const loginUserInStorage = JSON.parse(localStorage.getItem("loginUser"));
    const token = loginUserInStorage?.token;
    if (token) {
      config.headers["Authorization"] = token; // ヘッダーにトークンを追加
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
