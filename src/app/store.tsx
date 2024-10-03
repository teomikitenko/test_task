import { configureStore } from "@reduxjs/toolkit";
import employessReducer from "../feautures/employees/crudEmployeesSlice";
import userReducer from "../feautures/userAccount/userAccountSlice";

export const store = configureStore({
  reducer: {
    employee: employessReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
