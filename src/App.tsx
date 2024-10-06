import style from "./App.module.scss";
import MainPanel from "./Components/MainContent/MainContent";
import SideBar from "./Components/SideBar/SideBar";
import ModalManager from "./Components/Modals/ModalManager";

function App() {
  return (
    <div className={style.main}>
      <SideBar />
      <MainPanel />
      <ModalManager />
    </div>
  );
}

export default App;
