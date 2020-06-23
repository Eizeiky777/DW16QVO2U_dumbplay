import { USER } from "../constants/action-types";
import { API } from "../config/api";
// import { API, setAuthToken } from "../config/api";
// import axios from "axios";
// // Set config defaults when creating the instance
// export const API = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });
// // Alter defaults after instance has been created
// export const setAuthToken = (token) => {
//   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

export const getUsers = (user) => {
    return {
        type: USER,
        payload: async () => {
        try {
            // const {
            // data: { data },
            // } = await API.post("/register", user);

            // localStorage.setItem("token", data.token);
            // setAuthToken(data.token); //Set header token
            const {
            data: { data },
            } = await API.get("/users");
            return data;
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};
