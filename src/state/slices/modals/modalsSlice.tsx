import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {ModalManager} from '../../../types/types';

const initialState: ModalManager = {
  open: false,
  modalName: '',
  searchId: undefined,
};

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    addUserModal: (state, action: PayloadAction<ModalManager>) => {
      return {
        open: action.payload.open,
        modalName: action.payload.modalName,
        searchId: undefined,
      };
    },
    editUserModal: (state, action: PayloadAction<ModalManager>) => {
      return {
        open: action.payload.open,
        modalName: action.payload.modalName,
        searchId: action.payload.searchId,
      };
    },
  },
});

export const {addUserModal, editUserModal} = modalSlice.actions;
export default modalSlice.reducer;
