import {configureStore} from '@reduxjs/toolkit';

import budgetReducer from '../feautures/budget/budgetSlice';
import employessReducer from '../feautures/employees/crudEmployeesSlice';
import modalReducer from '../feautures/modals/modalsSlice';
import userReducer from '../feautures/userAccount/userAccountSlice';

export const store = configureStore({
  reducer: {
    employee: employessReducer,
    user: userReducer,
    budget: budgetReducer,
    modal: modalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
