import React, {useRef} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {createEmloyee} from '../../../state/slices/employees/crudEmployeesSlice';
import {addUserModal} from '../../../state/slices/modals/modalsSlice';
import type {RootState} from '../../../state/store';
import type {Employee} from '../../../types/types';
import type {FormInputs} from '../../../types/types';
import style from '../Modal.module.scss';

const AddEmloyee = () => {
  const modalContainerRef = useRef(null);
  const length = useSelector(
    (state: RootState) => state.employee.employee.length
  );
  const dispatch = useDispatch();

  const {register, handleSubmit} = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = ({
    lastName,
    firstName,
    role,
    email,
    status,
  }) => {
    const createObj: Employee = {
      id: length + 1,
      icon: '/src/assets/image/3.png',
      name: `${firstName} ${lastName}`,
      email: email,
      status: status as Employee['status'],
      role: role,
    };
    dispatch(createEmloyee(createObj));
    closeModal();
  };
  const closeModal = () => {
    dispatch(
      addUserModal({
        open: false,
        modalName: '',
        searchId: undefined,
      })
    );
  };

  const closeModalContainer = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === modalContainerRef.current) {
      closeModal();
    }
  };

  return (
    <div className={style.modal_backdrop}>
      <div
        ref={modalContainerRef}
        onClick={closeModalContainer}
        className={style.modal_container}
      >
        <div className={style.modal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add Employee</h2>
            <label>
              <p>Fist Name</p>
              <input type="text" {...register('firstName')} />
            </label>
            <label>
              <p>Last Name</p>
              <input type="text" {...register('lastName')} />
            </label>
            <label>
              <p>Email</p>
              <input type="email" {...register('email')} />
            </label>
            <label>
              <p>Status</p>
              <input type="text" {...register('status')} />
            </label>
            <label>
              <p>Role</p>
              <input type="text" {...register('role')} />
            </label>
            <div className={style.modal__buttons_container}>
              <button onClick={closeModal} type="button">
                <p>Cancel</p>
              </button>
              <button type="submit">
                <p>Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmloyee;
