import style from "./MainContent.module.scss";
import search from "../../assets/search.svg";
import deleteCircle from "../../assets/delete-circle.svg";
import MainSection from "./MainSection/MainSection";

const MainContent = () => {
  return (
    <div className={style.main_content_container}>
      <header className={style.main_content_container_header}>
        <h1>Data Table</h1>
        <div
          className={style.main_content_container_header__user_input_container}
        >
          <div>
            <img src={search} alt="search-icon" />
            <input type="text" />
            <img src={deleteCircle} alt="delete-icon" />
          </div>

          <button>
            <p>Add employee</p>
          </button>
        </div>
      </header>
      <MainSection />
    </div>
  );
};

export default MainContent;
