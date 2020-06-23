import { LISTTRANSACTION } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";

export const checkTransaction = () => {
    return {
        type: LISTTRANSACTION,
        payload: async () => {
        try {
            const token = localStorage.getItem("token");
            // console.log(token)
            setAuthToken(token);

            const {
            data: { data },
            } = await API.get("/transactions");
                
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

