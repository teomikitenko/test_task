import type { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import style from "./EmployeesDataTable.module.scss";
import { deleteEmployee } from "../../../feautures/employees/crudEmployeesSlice";
import { editUserModal } from "../../../feautures/modals/modalsSlice";
import { STATUS_COLOR } from "../../../constants/constants";
import type { StatusStyle } from "../../../types/types";

const EmployeesDataTable = () => {
  const {filteredEmployess} = useSelector((state: RootState) => state.employee);
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
          {filteredEmployess.map((e) => {
            const currentColor: string =
              STATUS_COLOR[e.status.replace(" ", "") as keyof StatusStyle];
            return (
              <tr key={e.name}>
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
                  <p style={{ color: currentColor }}>{e.status}</p>
                </td>
                <td>
                  <div>
                    <p>{e.role}</p>
                    <div>
                      <button
                        onClick={() =>
                          dispatch(
                            editUserModal({
                              open: true,
                              modalName: "editEmployee",
                              searchId: e.id,
                            })
                          )
                        }
                      >
                        <img
                          src="/src/assets/edit.svg"
                          width={19}
                          alt="edit-icon"
                        />
                      </button>

                      <button onClick={() => dispatch(deleteEmployee(e.name))}>
                        <img
                          src="/src/assets/trash.svg"
                          width={19}
                          alt="trash-icon"
                        />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesDataTable;
