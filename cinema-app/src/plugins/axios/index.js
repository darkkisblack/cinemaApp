import axios from "axios";
import interceptor from "./interceptor";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

interceptor(instance);

export default instance;
