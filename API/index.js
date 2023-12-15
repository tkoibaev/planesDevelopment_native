import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://192.168.84.65:8000",
})
