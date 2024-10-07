import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {Employee, EmployeeState, SortPayload} from '../../../types/types';

const initialState: EmployeeState = {
  employee: [
    {
      id: 1,
      icon: 'src/assets/image/1.png',
      name: 'Darlene Robertson',
      email: 'trungkienspktnd@gamail.com',
      status: 'Free',
      role: 'Reporter',
    },
    {
      id: 2,
      icon: 'src/assets/image/2.png',
      name: 'Devon Lane',
      email: 'tranthuy.nute@gmail.com',
      status: 'Busy',
      role: 'Bot Analyst',
    },
    {
      id: 3,
      icon: 'src/assets/image/3.png',
      name: 'Cody Fisher',
      email: 'tienlapspktnd@gmail.com',
      status: 'Workin',
      role: 'Sales Manager',
    },

    {
      id: 4,
      icon: '/src/assets/image/4.png',
      name: 'Theresa Webb',
      email: 'thuhang.nute@gmail.com',
      status: 'Free',
      role: 'Broadcaster',
    },
    {
      id: 5,
      icon: '/src/assets/image/5.png',
      name: 'Savannah Nguyen',
      email: 'manhhachkt08@gmail.com',
      status: 'Workin',
      role: 'Marketer',
    },
    {
      id: 6,
      icon: '/src/assets/image/6.png',
      name: 'Eleanor Pena',
      email: 'vuhaithuongnute@gmail.com',
      status: 'On Vacation',
      role: 'Analytics Admin',
    },
    {
      id: 7,
      icon: '/src/assets/image/7.png',
      name: 'Jenny Wilson',
      email: 'danghoang87hl@gmail.com',
      status: 'Busy',
      role: 'Bot Editor',
    },
    {
      id: 8,
      icon: '/src/assets/image/8.png',
      name: 'Marvin McKinney',
      email: 'binhan628@gmail.com',
      status: 'Free',
      role: 'Team Editor',
    },
    {
      id: 9,
      icon: '/src/assets/image/9.png',
      name: 'Cameron Williamson',
      email: 'ckctm12@gmail.com',
      status: 'Working',
      role: 'PPC Expert',
    },
    {
      id: 10,
      icon: '/src/assets/image/10.png',
      name: 'Jerome Bell',
      email: 'nvt.isst.nute@gmail.com',
      status: 'Busy',
      role: 'Team Owner',
    },
  ],
  search: '',
  filteredEmployess: [
    {
      id: 1,
      icon: 'src/assets/image/1.png',
      name: 'Darlene Robertson',
      email: 'trungkienspktnd@gamail.com',
      status: 'Free',
      role: 'Reporter',
    },
    {
      id: 2,
      icon: 'src/assets/image/2.png',
      name: 'Devon Lane',
      email: 'tranthuy.nute@gmail.com',
      status: 'Busy',
      role: 'Bot Analyst',
    },
    {
      id: 3,
      icon: 'src/assets/image/3.png',
      name: 'Cody Fisher',
      email: 'tienlapspktnd@gmail.com',
      status: 'Workin',
      role: 'Sales Manager',
    },

    {
      id: 4,
      icon: '/src/assets/image/4.png',
      name: 'Theresa Webb',
      email: 'thuhang.nute@gmail.com',
      status: 'Free',
      role: 'Broadcaster',
    },
    {
      id: 5,
      icon: '/src/assets/image/5.png',
      name: 'Savannah Nguyen',
      email: 'manhhachkt08@gmail.com',
      status: 'Workin',
      role: 'Marketer',
    },
    {
      id: 6,
      icon: '/src/assets/image/6.png',
      name: 'Eleanor Pena',
      email: 'vuhaithuongnute@gmail.com',
      status: 'On Vacation',
      role: 'Analytics Admin',
    },
    {
      id: 7,
      icon: '/src/assets/image/7.png',
      name: 'Jenny Wilson',
      email: 'danghoang87hl@gmail.com',
      status: 'Busy',
      role: 'Bot Editor',
    },
    {
      id: 8,
      icon: '/src/assets/image/8.png',
      name: 'Marvin McKinney',
      email: 'binhan628@gmail.com',
      status: 'Free',
      role: 'Team Editor',
    },
    {
      id: 9,
      icon: '/src/assets/image/9.png',
      name: 'Cameron Williamson',
      email: 'ckctm12@gmail.com',
      status: 'Working',
      role: 'PPC Expert',
    },
    {
      id: 10,
      icon: '/src/assets/image/10.png',
      name: 'Jerome Bell',
      email: 'nvt.isst.nute@gmail.com',
      status: 'Busy',
      role: 'Team Owner',
    },
  ],
};

export const emloyeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    createEmloyee: (state, action: PayloadAction<Employee>) => {
      const newEmployeeArray = [action.payload, ...state.employee];
      return {
        employee: newEmployeeArray,
        search: '',
        filteredEmployess: newEmployeeArray,
      };
    },
    deleteEmployee: (state, action: PayloadAction<Employee['name']>) => {
      const deleteEmployeeArray = state.employee.filter(
        e => e.name !== action.payload
      );
      return {
        employee: deleteEmployeeArray,
        search: '',
        filteredEmployess: deleteEmployeeArray,
      };
    },
    editEmployee: (state, action: PayloadAction<Employee>) => {
      const userIndex = state.employee.findIndex(
        e => e.id === action.payload.id
      );
      const newEmployeesArray = [...state.employee];
      newEmployeesArray.splice(userIndex, 1, action.payload);
      return {
        employee: newEmployeesArray,
        search: '',
        filteredEmployess: newEmployeesArray,
      };
    },
    searchEmployeeByName: (state, action: PayloadAction<string>) => {
      const filtered = [...state.employee].filter(e =>
        e.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        employee: [...state.employee],
        search: action.payload,
        filteredEmployess: filtered,
      };
    },
    resetEmployeeFilter: state => {
      return {
        employee: state.employee,
        search: '',
        filteredEmployess: [...state.employee],
      };
    },
    sortingBy: (state, action: PayloadAction<SortPayload>) => {
      const sorting = (a: any, b: any) => {
        if (a[action.payload.sortBy] < b[action.payload.sortBy]) return -1;
        if (a[action.payload.sortBy] > b[action.payload.sortBy]) return 1;
        return 0;
      };
      const sortedEmployee = action.payload.alpOrder
        ? [...state.employee].sort(sorting)
        : state.employee;
      return {
        employee: state.employee,
        search: '',
        filteredEmployess: [...sortedEmployee],
      };
    },
  },
});

export const {
  createEmloyee,
  deleteEmployee,
  editEmployee,
  searchEmployeeByName,
  resetEmployeeFilter,
  sortingBy,
} = emloyeesSlice.actions;
export default emloyeesSlice.reducer;
