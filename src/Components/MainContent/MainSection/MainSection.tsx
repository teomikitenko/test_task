import {useSelector} from 'react-redux';

import type {RootState} from '../../../app/store';
import EmployeesDataTable from '../EmployeesDataTable/EmployeesDataTable';
import style from './MainSection.module.scss';

const MainSection = () => {
  const employee = useSelector((state: RootState) => state.employee);
  const budget = useSelector((state: RootState) => state.budget);
  return (
    <main className={style.main_section}>
      <div className={style.main_section__search_result}>
        <h2>{employee.search.length > 0 ? employee.search : 'Employee'}</h2>
        <p>{employee.filteredEmployess.length} results found</p>
        <div className={style.main_section__budget_card}>
          {budget.map(b => (
            <div key={b.title}>
              <p>{b.title}</p>
              <p>{b.budget}</p>
            </div>
          ))}
        </div>
      </div>
      <EmployeesDataTable />
    </main>
  );
};

export default MainSection;
