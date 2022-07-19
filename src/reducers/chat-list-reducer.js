import { PURGE } from 'redux-persist';

const INITIAL_STATE = [];
const chatListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHAT_LIST':
            return state;
        case 'UPDATE_CHAT_LIST':
            return [...state, action.payload];
        case PURGE:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default chatListReducer;