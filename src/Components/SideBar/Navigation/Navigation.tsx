import anchor from '../../../assets/anchor.svg';
import burger from '../../../assets/burger.svg';
import powerOff from '../../../assets/power-off.svg';
import {NAV_ITEMS} from '../../../constants/constants';
import style from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={style.sidebar_menu_container}>
      <nav className={style.navigation_items_container}>
        {NAV_ITEMS.map(i => (
          <div
            key={i.title}
            className={style.navigation_items_container__navigation_item}
          >
            <div
              className={
                style.navigation_items_container__navigation_item__icon_name_container
              }
            >
              <div
                className={
                  style.navigation_items_container__navigation_item__icon_name_container_icon
                }
              >
                <img src={i.icon} alt="nav-icon" />
              </div>
              <div
                className={
                  style.navigation_items_container__navigation_item__icon_name_container_name
                }
              >
                <p>{i.title}</p>
              </div>
            </div>

            <img src={burger} alt="burger-icon" />
          </div>
        ))}
      </nav>
      <footer className={style.side_bar_footer_container}>
        <div className={style.side_bar_footer_container_item}>
          <div>
            <img src={anchor} alt="support-icon" />
          </div>
          <p>Support</p>
        </div>
        <div className={style.side_bar_footer_container_item}>
          <div>
            <img src={powerOff} alt="sign-out-icon" />
          </div>
          <p>Sign Out</p>
        </div>
      </footer>
    </div>
  );
};

export default Navigation;
