import { debounce } from "lodash";
import style from "./MainContent.module.scss";
import search from "../../assets/search.svg";
import deleteCircle from "../../assets/delete-circle.svg";
import MainSection from "./MainSection/MainSection";
import { useDispatch } from "react-redux";
import { addUserModal } from "../../feautures/modals/modalsSlice";
import { searchEmployeeByName,resetEmployeeFilter } from "../../feautures/employees/crudEmployeesSlice";
import { useState, useEffect} from "react";

const MainContent = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addEmployeeHandler = () => {
    dispatch(
      addUserModal({
        open: true,
        modalName: "addEmployee",
        searchId: undefined,
      })
    );
  };

  const debouncedDispatch = debounce((value) => {
    dispatch(searchEmployeeByName(value));
  }, 300);

  useEffect(() => {
    if (value) {
      debouncedDispatch(value);
    }
    return () => {
      debouncedDispatch.cancel();
    };
  }, [value]);

  const resetValue = () => {
    setValue("");
    dispatch(resetEmployeeFilter())
  };
  const searchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className={style.main_content_container}>
      <header className={style.main_content_container_header}>
        <h1>Data Table</h1>
        <div
          className={style.main_content_container_header__user_input_container}
        >
          <div>
            <img src={search} alt="search-icon" />
            <input type="text" value={value} onChange={searchVal} />
            <img src={deleteCircle} onClick={resetValue} alt="delete-icon" />
          </div>

          <button onClick={addEmployeeHandler}>
            <p>Add employee</p>
          </button>
        </div>
      </header>
      <MainSection />
    </div>
  );
};

export default MainContent;
