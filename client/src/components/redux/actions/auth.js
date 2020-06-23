import { REGISTER, LOGIN } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";

// import axios from "axios";
// // Set config defaults when creating the instance
// export const API = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });
// // Alter defaults after instance has been created
// export const setAuthToken = (token) => {
//   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

export const register = (user) => {
  return {
    type: REGISTER,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/register", user);

        localStorage.setItem("token", data.token);
        setAuthToken(data.token); //Set header token
        
        // const {
        //   data: { data: dataUser },
        // } = await API.get("/user");
        const ids = data.id;
        const { data: { data: dataUser } } = await API.get("/users/" + ids );
        localStorage.setItem("role", dataUser.listAs);
        localStorage.setItem("id", dataUser.id);

        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const login = (user) => {
  return {
    type: LOGIN,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/login", user);
    
        localStorage.setItem("token", data.token);
        setAuthToken(data.token); //Set header token

        const ids = data.id;
        const { data: { data: dataUser } } = await API.get("/users/" + ids );
        localStorage.setItem("role", dataUser.listAs);
        localStorage.setItem("id", dataUser.id);

        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
