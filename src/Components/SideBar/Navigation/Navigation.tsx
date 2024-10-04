import style from './Navigation.module.scss'
import { NAV_ITEMS } from "../../../constants/constants";
import burger from '../../../assets/burger.svg'

const Navigation = () => {
  return (
    <div className={style.navigation_container}>
      {NAV_ITEMS.map((i) => (
        <div className={style.navigation_container__navigation_item} >
          <img src={i.icon} alt='nav-icon' />
          <p>{i.title}</p>
          <img src={burger} alt="burger-icon" />
        </div>
      ))}
    </div>
  );
};

export default Navigation;
