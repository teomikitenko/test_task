import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Employee } from "../../types/types";

const initialState = [
  {
    icon: "src/assets/image/1.png",
    name: "Darlene Robertson",
    email: "trungkienspktnd@gamail.com",
    status: "Free",
    role: "Reporter",
  },
  {
    icon: "src/assets/image/2.png",
    name: "Devon Lane",
    email: "tranthuy.nute@gmail.com",
    status: "Busy",
    role: "Bot Analyst",
  },
  {
    icon: "src/assets/image/3.png",
    name: "Cody Fisher",
    email: "tienlapspktnd@gmail.com",
    status: "Workin",
    role: "Sales Manager",
  },
  { icon:"/src/assets/image/4.png",
    name: "Theresa Webb",
    email: "thuhang.nute@gmail.com",
    status: "Free",
    role: "Broadcaster",
  },
  {
    icon:"/src/assets/image/5.png",
    name: "Savannah Nguyen",
    email: "manhhachkt08@gmail.com",
    status: "Workin",
    role: "Marketer",
  },
  {
    icon: "/src/assets/image/6.png",
    name: "Eleanor Pena",
    email: "vuhaithuongnute@gmail.com",
    status: "On Vacation",
    role: "Analytics Admin",
  },
  {
    icon: "/src/assets/image/7.png",
    name: "Jenny Wilson",
    email: "danghoang87hl@gmail.com",
    status: "Busy",
    role: "Bot Editor",
  },
  {
    icon: "/src/assets/image/8.png",
    name: "Marvin McKinney",
    email: "binhan628@gmail.com",
    status: "Free",
    role: "Team Editor",
  },
  {
    icon: "/src/assets/image/9.png",
    name: "Cameron Williamson",
    email: "ckctm12@gmail.com",
    status: "Working",
    role: "PPC Expert",
  },
  {
    icon: "/src/assets/image/10.png",
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
