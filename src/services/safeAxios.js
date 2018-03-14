import axios from "axios";
import wwtEnv from "wwt-env-js";
import store from "@/store";

// safe is a misnomer, it still throws it just provides an error for the global error display
function http(handled) {
  const instance = axios.create({
    baseURL: wwtEnv.getApiForwardUrl(),
    withCredentials: true
  });
  if (!handled) {
    instance.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        store.dispatch("setMessenger", {}); // set messenger options to empty object, for default error message
        store.dispatch("showMessenger", error);
        return Promise.reject(error);
      }
    );
  }
  return instance;
}

export default http;
