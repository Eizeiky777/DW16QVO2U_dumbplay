import { LISTTRANSACTION } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const LISTTRANSACTION_PENDING = `${LISTTRANSACTION}_${ActionType.Pending}`;
const LISTTRANSACTION_FULFILLED = `${LISTTRANSACTION}_${ActionType.Fulfilled}`;
const LISTTRANSACTION_REJECTED = `${LISTTRANSACTION}_${ActionType.Rejected}`;

const listTransactionReducer = (state = initialState, action) => {
switch (action.type) {
    case LISTTRANSACTION_PENDING:
    return {
        ...state,
        loading: true,
    };
    case LISTTRANSACTION_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case LISTTRANSACTION_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default listTransactionReducer;
