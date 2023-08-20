import React from "react";
import styles from "./Home.module.css";
import Logo from "../images/tupLogo.png";
import Request from "../images/request.png";
import Validation from "../images/validation.png";
import Maker from "../images/maker.png";
import { Link } from "react-router-dom";

const handleSearch = (event) => {
  //setSelectedValue(event.target.value);
};
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.con}>
        <div className={styles.above}>
          <img src={Logo} />
          <h6>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES-CAVITE</h6>
        </div>
        <div className={styles.spread}>
          <div className={styles.cards}>
            <Link to="/Validation" className={styles.button}>
              <img src={Validation} alt="validation" />
            </Link>
            <h1>ID VALIDATION</h1>
          </div>
          <div className={styles.cards}>
            <Link to="/Request" className={styles.button}>
            <img src={Request} alt="validation" />
            </Link>
            <h1>ID REQUESTING</h1>
          </div>
          <div className={styles.cards}>
            <Link to="/ID_MAKER" className={styles.button}>
            <img src={Maker} alt="validation" />
            </Link>
            <h1>ID MAKER</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
