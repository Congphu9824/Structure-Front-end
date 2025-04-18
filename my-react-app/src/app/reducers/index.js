// src/app/reducers/index.js
import { combineReducers } from "redux";

// Giả sử bạn có một reducer cho người dùng
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Kết hợp các reducer
const rootReducer = combineReducers({
  user: userReducer, // Thêm các reducer khác nếu có
});

export default rootReducer;
