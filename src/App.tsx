import style from './App.module.scss';
import MainPanel from './Components/MainContent/MainContent';
import ModalManager from './Components/Modals/ModalManager';
import SideBar from './Components/SideBar/SideBar';

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
