import {configureStore} from '@reduxjs/toolkit';

import budgetReducer from './slices/budget/budgetSlice';
import employessReducer from './slices/employees/crudEmployeesSlice';
import modalReducer from './slices/modals/modalsSlice';
import userReducer from './slices/userAccount/userAccountSlice';

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
