import { USER } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const USER_PENDING = `${USER}_${ActionType.Pending}`;
const USER_FULFILLED = `${USER}_${ActionType.Fulfilled}`;
const USER_REJECTED = `${USER}_${ActionType.Rejected}`;

// const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
// const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
// const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

const userReducer = (state = initialState, action) => {
switch (action.type) {
    case USER_PENDING:
    return {
        ...state,
        loading: true,
    };
    case USER_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case USER_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default userReducer;
