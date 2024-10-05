import type { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import style from "./EmployeesDataTable.module.scss";

const EmployeesDataTable = () => {
  const employees = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();
  return (
    <div className={style.data_table}>
      <table>
        <thead>
          <tr>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Email</p>
            </th>
            <th>
              <p>Status</p>
            </th>
            <th>
              <p>Role</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr>
              <td>
                <div>
                  <img src={e.icon} alt="employee-icon" />
                  <p>{e.name}</p>
                </div>
              </td>
              <td>
                <p>{e.email}</p>
              </td>
              <td>
                <p>{e.status}</p>
              </td>
              <td>
                <div>
                  <p>{e.role}</p>
                  <div>
                    <img src="/src/assets/edit.svg" width={19} alt="edit-icon" />
                    <img src="/src/assets/trash.svg" width={19} alt="trash-icon" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesDataTable;
