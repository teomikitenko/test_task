import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import type {RootState} from '../../../app/store';
import {STATUS_COLOR} from '../../../constants/constants';
import {
  deleteEmployee,
  sortingBy,
} from '../../../feautures/employees/crudEmployeesSlice';
import {editUserModal} from '../../../feautures/modals/modalsSlice';
import type {StatusStyle} from '../../../types/types';
import style from './EmployeesDataTable.module.scss';

const EmployeesDataTable = () => {
  const [aplOrder, setAlpOrder] = useState(true);
  const {filteredEmployess} = useSelector((state: RootState) => state.employee);
  const dispatch = useDispatch();

  const sortingHandler = (sortBy: string) => {
    dispatch(sortingBy({sortBy: sortBy, alpOrder: aplOrder}));
    setAlpOrder(order => !order);
  };

  return (
    <div className={style.data_table}>
      <table>
        <thead>
          <tr>
            <th>
              <div>
                <p>Name</p>
                <img
                  onClick={() => sortingHandler('name')}
                  src="/src/assets/sort.svg"
                  alt="order-icon"
                />
              </div>
            </th>
            <th>
              <div>
                <p>Email</p>
                <img
                  onClick={() => sortingHandler('email')}
                  src="/src/assets/sort.svg"
                  alt="order-icon"
                />
              </div>
            </th>
            <th>
              <div>
                <p>Status</p>
                <img
                  onClick={() => sortingHandler('status')}
                  src="/src/assets/sort.svg"
                  alt="order-icon"
                />
              </div>
            </th>
            <th>
              <div>
                <p>Role</p>
                <img
                  onClick={() => sortingHandler('role')}
                  src="/src/assets/sort.svg"
                  alt="order-icon"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployess.map(e => {
            const currentColor: string =
              STATUS_COLOR[e.status.replace(' ', '') as keyof StatusStyle];
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
                  <p style={{color: currentColor}}>{e.status}</p>
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
                              modalName: 'editEmployee',
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
