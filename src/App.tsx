import style from "./App.module.scss";
import Employees from "./feautures/employees/Employees";
import MainPanel from "./Components/MainContent/MainContent";
import  SideBar  from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className={style.main}>
      <SideBar/>
      <MainPanel/>
     {/* <Employees/> */}
    </div>
  );
}

export default App;
