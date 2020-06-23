import { TRANSACTION } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const TRANSACTION_PENDING = `${TRANSACTION}_${ActionType.Pending}`;
const TRANSACTION_FULFILLED = `${TRANSACTION}_${ActionType.Fulfilled}`;
const TRANSACTION_REJECTED = `${TRANSACTION}_${ActionType.Rejected}`;

const transactionReducer = (state = initialState, action) => {
switch (action.type) {
    case TRANSACTION_PENDING:
    return {
        ...state,
        loading: true,
    };
    case TRANSACTION_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case TRANSACTION_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default transactionReducer;
