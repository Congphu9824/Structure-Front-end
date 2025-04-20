import { combineReducers } from "redux";

// reducer được dùng để cập nhật trạng thái của ứng dụng
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload }; // Cập nhật thông tin người dùng
    default:
      return state;
  }
};

// Kết hợp các reducer
const rootReducer = combineReducers({
  user: userReducer, //  Reducer quản lý thông tin người dùng
});

export default rootReducer;
