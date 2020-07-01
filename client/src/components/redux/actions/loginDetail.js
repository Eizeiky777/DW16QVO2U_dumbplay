import { LOGINDETAIL } from "../constants/action-types";
import { API } from "../config/api";


export const getLoginDetail = () => {
    return {
    type: LOGINDETAIL,
    payload: async () => {
        try {

        let ids = localStorage.getItem('id');
        if (ids === null ) ids = 10;

        const {
            data: { data },
        } = await API.get("/users/" + ids );

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
