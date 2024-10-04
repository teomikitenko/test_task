import style from "./SideBar.module.scss";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import userIcon from "../../assets/image/user.png";
import settingsIcon from "../../assets/settings.svg";
import Navigation from "./Navigation/Navigation";

const SideBar = () => {
  const { name } = useSelector((state: RootState) => state.user);
  return (
    <div className={style.side_bar}>
      <div className={style.side_bar_header}>
        <div className={style.side_bar_header_user}>
          <img src={userIcon} alt="" />
        </div>
        <div>
          <h1>Welcome back,</h1>
          <p>{name}</p>
        </div>
        <div className={style.side_bar_header__setting_container}>
          <img src={settingsIcon} alt="" />
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default SideBar;
