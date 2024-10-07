import {useSelector} from 'react-redux';

import type {RootState} from '../../../state/store';
import type {SortIconColorType} from '../../../types/types';
import {SortIconDown, SortIconUp} from '../../SVGComponents/IconComponent';
import EmployeesDataTable from '../EmployeesDataTable/EmployeesDataTable';
import style from './MainSection.module.scss';

const MainSection = () => {
  const employee = useSelector((state: RootState) => state.employee);
  const budget = useSelector((state: RootState) => state.budget);
  const sortIconColor: SortIconColorType = {
    down: '#F63F3F',
    up: '#44C5E2',
    defaultDown: '#FFFFFF',
  };
  return (
    <main className={style.main_section}>
      <div className={style.main_section__search_result}>
        <h2>{employee.search.length > 0 ? employee.search : 'Employee'}</h2>
        <p>{employee.filteredEmployess.length} results found</p>
        <div className={style.main_section__budget_card}>
          {budget.map(b => (
            <div
              className={style.main_section__budget_card__container}
              key={b.title}
            >
              <div className={style.main_section__budget_card__title}>
                <p>{b.title}</p>
                <div className={style.main_section__budget_card__title__icon}>
                  {b.value === 'up' ? (
                    <SortIconUp
                      fill={sortIconColor[b.value as keyof SortIconColorType]}
                    />
                  ) : b.value === 'down' ? (
                    <SortIconDown
                      fill={sortIconColor[b.value as keyof SortIconColorType]}
                    />
                  ) : (
                    <SortIconDown
                      fill={sortIconColor[b.value as keyof SortIconColorType]}
                    />
                  )}
                </div>
              </div>

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
