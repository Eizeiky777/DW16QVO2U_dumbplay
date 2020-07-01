import { UPDATETRANSACTION } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const UPDATETRANSACTION_PENDING = `${UPDATETRANSACTION}_${ActionType.Pending}`;
const UPDATETRANSACTION_FULFILLED = `${UPDATETRANSACTION}_${ActionType.Fulfilled}`;
const UPDATETRANSACTION_REJECTED = `${UPDATETRANSACTION}_${ActionType.Rejected}`;

const updateTransactionReducer = (state = initialState, action) => {
switch (action.type) {
    case UPDATETRANSACTION_PENDING:
    return {
        ...state,
        loading: true,
    };
    case UPDATETRANSACTION_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case UPDATETRANSACTION_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default updateTransactionReducer;
