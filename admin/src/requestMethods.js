import axios from "axios";

const BASE_URL = "http://localhost:8005/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDRmZGViODAwN2ViMTdiNTM5ODgyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk2MDI2MiwiZXhwIjoxNjgxMjE5NDYyfQ.IVnDXSby71ki37wiS_-w9o4Z5EtmhcyxUEBiq0U5fLQ"
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});