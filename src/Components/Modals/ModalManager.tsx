import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import AddEmloyee from "./AddEmployee/AddEmloyee";
import EditEmployee from "./EditEmployee/EditEmployee";
const ModalManager = () => {
  const { open, modalName } = useSelector((state: RootState) => state.modal);

  return (
    <>
      {open && modalName === "addEmployee" &&
        createPortal(<AddEmloyee key={modalName} />, document.body)}
        {open && modalName === 'editEmployee' &&
        createPortal(<EditEmployee key={modalName} />, document.body)}
    </>
  );
};

export default ModalManager;
