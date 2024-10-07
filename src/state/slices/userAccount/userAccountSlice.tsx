import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: 'Drax', // подумав що дані будуть отримуватись з якоїсь бази даних тому будуть оновлюватись - на даний час захардкодив імя та емейл
  email: 'drax@gmail.com',
};

export const userSlice = createSlice({
  //створив для того щоб в майбутньому можливо було проводити маніпуліяції з аккаунтом
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
