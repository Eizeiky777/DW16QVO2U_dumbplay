import { UPDATETRANSACTION } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";
//import moment from 'moment';

export const updateTransactionUser = (status, ids) => {
    return {
        type: UPDATETRANSACTION,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );

            const {
                data: { data },
                } = await API.get(`/transaction/${ids}`);

            const formData = new FormData();
            
            formData.append("startDate", data.startDate);
            formData.append("dueDate", data.dueDate);
            formData.append("userId", data.User.id);
            formData.append("status", status);
            formData.append("attach", data.attach);
            // console.log(data.attach)

            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            
            await API.patch(`/transaction/edit/${ids}`, formData, config);
                
            const {
                data: { data: dataNew },
                } = await API.get('/transactions');

            console.log(dataNew);
            return dataNew;
        } catch (error) {
            if (error.response) {
            const { data, status } = error.response;

            if (status > 399) throw data.error;
            }
        }
        },
    };
};
