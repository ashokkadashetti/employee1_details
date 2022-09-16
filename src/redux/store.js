import { legacy_createStore } from "redux";
import userReducer from "../components/employee/reducers/UserReducer";

export const store = legacy_createStore(userReducer);
