import { getToken } from "./auth";

import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333/", //DEV
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
});

api.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("@mytapp:authToken");
  const headers = { ...config.headers };

  if (token) {
    headers.token = JSON.parse(token);
  }
  return { ...config, headers };
});

export default api;
