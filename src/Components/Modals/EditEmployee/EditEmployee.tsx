import style from "../Modal.module.scss";
import { useRef } from "react";
import type { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { editEmployee } from "../../../feautures/employees/crudEmployeesSlice";
import { editUserModal } from "../../../feautures/modals/modalsSlice";
import type { Employee, FormInputs } from "../../../types/types";
import { useForm, SubmitHandler } from "react-hook-form";

const EditEmployee = () => {
  const modalContainerRef = useRef(null);
  const employees = useSelector((state: RootState) => state.employee.employee);
  const modal = useSelector((state: RootState) => state.modal);
  const { name, email, status, role, id, icon } = employees.filter(
    (e) => e.id === modal.searchId
  )[0];
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(
      editUserModal({
        open: false,
        modalName: "",
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

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
      email: email,
      status: status,
      role: role,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = ({
    firstName,
    lastName,
    email,
    role,
    status,
  }) => {
    const editObj: Employee = {
      id: id,
      icon: icon,
      name: `${firstName} ${lastName}`,
      email: email,
      status: status as Employee["status"],
      role: role,
    };
    dispatch(editEmployee(editObj));
    closeModal();
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
            <h2>Edit Employee</h2>
            <label>
              <p>Fist Name:</p>
              <input type="text" {...register("firstName")} />
            </label>
            <label>
              <p>Last Name:</p>
              <input type="text" {...register("lastName")} />
            </label>
            <label>
              <p>Email:</p>
              <input type="email" {...register("email")} />
            </label>
            <label>
              <p>Status:</p>
              <input type="text" {...register("status")} />
            </label>
            <label>
              <p>Role:</p>
              <input type="text" {...register("role")} />
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

export default EditEmployee;
