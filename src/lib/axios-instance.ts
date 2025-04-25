import axios from "axios";
console.log(" process.env.TMBD_BASE_URL", process.env.TMBD_BASE_URL);

export const axiosInstance = axios.create({
  baseURL: process.env.TMBD_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
