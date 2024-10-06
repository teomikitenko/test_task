export type Employee = {
  id?: number;
  icon?: string | undefined;
  name: string;
  email: string;
  status: 'Free' | 'Busy' | 'Workin' | 'Working' | 'On Vacation';
  role: string;
};
export type EmployeeState = {
  employee: Employee[];
  search: string;
  filteredEmployess: Employee[];
};

export type UserAccount = {
  icon: string;
  name: string;
  email: string;
};
export type StatusStyle = {
  Free: string;
  Busy: string;
  Workin: string;
  Working: string;
  OnVacation: string;
};
export type ModalManager = {
  open: boolean;
  modalName: 'addEmployee' | 'editEmployee' | '';
  searchId: number | undefined;
};
export type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  role: string;
};
export type SortPayload = {
  sortBy: string;
  alpOrder: boolean;
};
