import { combineReducers } from "redux";
import { FULL_RESET } from "../actions/actionTypes";
// import { ADD_CANDIDATE } from "../actions/actionTypes";

//hard coded users -- test
const initialUsers = [
  {
    firstName: "Zoran",
    lastName: "Sakic",
    votes: 13,
    imageFileName: "portrait010.jpg"
  },
  {
    firstName: "Aapeli",
    lastName: "Joki",
    votes: 22,
    imageFileName: "portrait006.jpg"
  }
];

//Reducers
export const userReducer = (state = initialUsers, action) => {
    switch (action.type) {
        case FULL_RESET:
            return [...state, {
                    "firstName": "reducer", "lastName": "test",
                    "votes": 101, "imageFileName": "portrait003.jpg"
                }];
        default:
        return state
    }
};
export const findReducer = (state = "", action) => {
  return state;
};

export const allReducers = combineReducers({
  users: userReducer,
  search: findReducer
});
