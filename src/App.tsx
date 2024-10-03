import style from "./App.module.scss";
import Employees from "./feautures/employees/Employees";
import MainPanel from "./Components/MainPanel/MainPanel";
import  NavPanel  from "./Components/NavPanel/NavPanel";

function App() {
  return (
    <div className={style.main}>
      <NavPanel/>
      <MainPanel/>
     {/* <Employees/> */}
    </div>
  );
}

export default App;
