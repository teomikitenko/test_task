import style from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={style.main_content_container}>
      <header className={style.main_content_container_header}>
        <div>
          <h1>Data Table</h1>
        </div>
        <input type="text" />
        <button>
          <p>Add employee</p>
        </button>
      </header>
    </div>
  );
};

export default MainContent;
