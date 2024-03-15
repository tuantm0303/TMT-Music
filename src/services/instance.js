import axios from "axios"

const axiosClient = axios.create({
  // baseURL: `http://localhost:8000/api/`,
  baseURL: "https://server-tmt-music-75f9pi5q4-tuantm0303.vercel.app/api",
})

export default axiosClient
