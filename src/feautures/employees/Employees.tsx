import React, { useState } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { createEmloyee, deleteEmloyee } from "./crudEmployeesSlice";
import deleteIcon from "../../assets/delete.svg";

const Employees = () => {
  const [value, setValue] = useState(" ");
  const employees = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();

  const addEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formaData = new FormData(e.currentTarget);
    const employee = {
      name: formaData.get("name") as string,
      email: formaData.get("email") as string,
      status: formaData.get("status") as string,
      role: formaData.get("role") as string,
    };
    dispatch(createEmloyee(employee));
  };
  return (
    <div>
      <form onSubmit={addEmployee}>
        <label>
          Name:
          <input name="name" id="name" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="text" />
        </label>
        <label>
          Status:
          <input name="status" type="text" />
        </label>
        <label>
          Role:
          <input name="role" type="text" />
        </label>

       
      </form>
      {employees.map((employee) => (
        <div key={employee.name} style={{ display: "flex", gap: 3 }}>
          <p>{employee.name}</p>
          <p>{employee.email}</p>
          <p>{employee.status}</p>
          <p>{employee.role}</p>

          <img
            onClick={() => dispatch(deleteEmloyee(employee))}
            src={deleteIcon}
            alt="delete"
          />
        </div>
      ))}
    </div>
  );
};

export default Employees;
