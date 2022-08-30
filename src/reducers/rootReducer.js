import { combineReducers } from 'redux';
import chatListReducer from './chat-list-reducer.js';

const RootReducer = combineReducers({
    chatList: chatListReducer,
});

export default RootReducer;