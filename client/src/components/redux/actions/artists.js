import { ADDARTIST } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";
// import moment from 'moment';

//title, file, year, categoryId, description, titleEpisode, fileEpisode, linkEpisode
export const addArtist = ( e ) => {
    return {
        type: ADDARTIST,
        payload: async () => {
        try {
            setAuthToken( localStorage.getItem("token") );

            const {
            data: { data },
            } = await API.post("/artists/add", e);
            
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

// export const postEpisodeArtist = ( dataAddEpisode, id ) => {
//     return {
//         type: ADDEPISODETVMOVIE,
//         payload: async () => {
//         try {
//             setAuthToken( localStorage.getItem("token") );

//             const { titleEpisode, fileEpisode, linkEpisode  } = dataAddEpisode;

//             const formDataEpisode = new FormData();
//             formDataEpisode.append("title", titleEpisode);
//             formDataEpisode.append("thumbnailFilm", fileEpisode);
//             formDataEpisode.append("linkFilm", linkEpisode);
//             formDataEpisode.append("filmId", id);

//             const config = {
//                 headers: {
//                     "content-type": "multipart/form-data",
//                 },
//             };

//             const {
//             data: { data: dataEpisode },
//             } = await API.post("/episodes/add", formDataEpisode, config);
            
//             return dataEpisode;
//         } catch (error) {
//             if (error.response) {
//             const { data, status } = error.response;

//             if (status > 399) throw data.error;
//             }
//         }
//         },
//     };
// };

