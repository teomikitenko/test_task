import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Employee } from "../../types/types";

const initialState =
 [
  {
    name: "Darlene Robertson",
    email: "trungkienspktnd@gamail.com",
    status: "Free",
    role: "Reporter",
  },
  {
    name: "Devon Lane",
    email: "tranthuy.nute@gmail.com",
    status: "Busy",
    role: "Bot Analyst",
  },
  {
    name: "Cody Fisher",
    email: "tienlapspktnd@gmail.com",
    status: "Workin",
    role: "Sales Manager",
  },
  {
    name: "Theresa Webb",
    email: "thuhang.nute@gmail.com",
    status: "Free",
    role: "Broadcaster",
  },
  {
    name: "Savannah Nguyen",
    email: "manhhachkt08@gmail.com",
    status: "Workin",
    role: "Marketer",
  },
  {
    name: "Eleanor Pena",
    email: "vuhaithuongnute@gmail.com",
    status: "On Vacation",
    role: "Analytics Admin",
  },
  {
    name: "Jenny Wilson",
    email: "danghoang87hl@gmail.com",
    status: "Busy",
    role: "Bot Editor",
  },
  {
    name: "Marvin McKinney",
    email: "binhan628@gmail.com",
    status: "Free",
    role: "Team Editor",
  },
  {
    name: "Cameron Williamson",
    email: "ckctm12@gmail.com",
    status: "Working",
    role: "PPC Expert",
  },
  {
    name: "Jerome Bell",
    email: "nvt.isst.nute@gmail.com",
    status: "Busy",
    role: "Team Owner",
  },
];

export const emloyeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    createEmloyee: (state, action: PayloadAction<Employee>) => {
      return [action.payload, ...state];
    },
    deleteEmloyee: (state, action: PayloadAction<Employee>) => {
      return state.filter((e) => e.name !== action.payload.name);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      //const index = state.indexOf(action.payload.name)
      return [];
    },
  },
});

export const { createEmloyee, deleteEmloyee, updateEmployee } =
  emloyeesSlice.actions;
export default emloyeesSlice.reducer;
