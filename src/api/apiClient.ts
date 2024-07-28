import axios from "axios";

// สร้าง instance ของ Axios
const apiClient = axios.create({
  baseURL: "http://localhost:5555",
  headers: {
    "Content-Type": "application/json",
  },
});

// ตัวอย่างการตั้งค่า interceptor เพื่อเพิ่ม token ใน headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
