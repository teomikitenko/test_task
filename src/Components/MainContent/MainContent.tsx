import {debounce} from 'lodash';
import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import deleteCircle from '../../assets/delete-circle.svg';
import search from '../../assets/search.svg';
import {
  resetEmployeeFilter,
  searchEmployeeByName,
} from '../../feautures/employees/crudEmployeesSlice';
import {addUserModal} from '../../feautures/modals/modalsSlice';
import style from './MainContent.module.scss';
import MainSection from './MainSection/MainSection';

const MainContent = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const addEmployeeHandler = () => {
    dispatch(
      addUserModal({
        open: true,
        modalName: 'addEmployee',
        searchId: undefined,
      })
    );
  };

  const debouncedDispatch = debounce(value => {
    dispatch(searchEmployeeByName(value));
  }, 300);

  useEffect(() => {
    debouncedDispatch(value);

    return () => {
      debouncedDispatch.cancel();
    };
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const resetValue = () => {
    setValue('');
    dispatch(resetEmployeeFilter());
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
