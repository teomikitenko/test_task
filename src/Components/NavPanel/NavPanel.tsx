import style from "./NavPanel.module.scss";
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import userIcon from '../../assets/icons/user.png'

const NavPanel = () => {
  const { name } = useSelector((state: RootState) => state.user);
  return (
    <div className={style.nav_panel}>
      <div> 
        <img style={{width:'40px'}} src={userIcon} alt="" />
        <h1>Welcome back</h1>
        <p>{name}</p></div>
    </div>
  );
};
export default NavPanel;
