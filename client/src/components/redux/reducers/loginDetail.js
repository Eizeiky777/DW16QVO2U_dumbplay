import { LOGINDETAIL } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const LOGINDETAIL_PENDING = `${LOGINDETAIL}_${ActionType.Pending}`;
const LOGINDETAIL_FULFILLED = `${LOGINDETAIL}_${ActionType.Fulfilled}`;
const LOGINDETAIL_REJECTED = `${LOGINDETAIL}_${ActionType.Rejected}`;

const loginDetailReducer = (state = initialState, action) => {
switch (action.type) {
    case LOGINDETAIL_PENDING:
    return {
        ...state,
        loading: true,
    };
    case LOGINDETAIL_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case LOGINDETAIL_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default loginDetailReducer;
