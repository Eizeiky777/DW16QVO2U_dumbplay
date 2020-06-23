import { TRANSACTION } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";
import moment from 'moment';

export const postTransaction = (file, idUser) => {
    return {
        type: TRANSACTION,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );

            const formData = new FormData();
            
            var currentDate = moment(currentDate);
            var futureMonth = moment(currentDate).add(1, 'M');
            // var futureMonthEnd = moment(futureMonth).endOf('month');
            // if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
            //     futureMonth = futureMonth.add(1, 'd');
            // }

            formData.append("startDate", currentDate);
            formData.append("dueDate", futureMonth);
            formData.append("userId", idUser);
            formData.append("attach", file);
            formData.append("status", "Pending");

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            
            const {
            data: { data },
            } = await API.post("/transaction/add", formData, config);
                
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
