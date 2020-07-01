import { MUSICS, ADDMUSICS } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";


export const getMusics = () => {
    return {
        type: MUSICS,
        payload: async () => {
        try {
            const {
            data: { data },
            } = await API.get("/musics");
            
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

export const addMusics = (e) => {
    return {
        type: ADDMUSICS,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );
            const { title, thumbnail, year, artistId, attach } = e;

            const formData = new FormData();
            formData.append("title", title);
            formData.append("year", year);
            formData.append("thumbnail",thumbnail);
            formData.append("attach", attach);
            formData.append("artistId", artistId);
            console.log(e)
            
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            
            const {
            data: { data },
            } = await API.post("/musics/add", formData, config);
                
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
