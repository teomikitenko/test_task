import { configureStore } from "@reduxjs/toolkit";
import employessReducer from "../feautures/employees/crudEmployeesSlice";
import userReducer from "../feautures/userAccount/userAccountSlice";
import budgetReducer from "../feautures/budgetSlice/budgetSlice";

export const store = configureStore({
  reducer: {
    employee: employessReducer,
    user: userReducer,
    budget:budgetReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
