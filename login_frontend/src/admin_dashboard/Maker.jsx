import React, { useState } from "react";
import styles from "./Request.module.css";
import Logo from "../images/tupLogo.png";
import Burger from "../images/burger.svg";
import Search from "../images/searchIcon.svg";
import Close from "../images/closeIcon.svg";
import Home from "../images/homeIcon.svg";
import Logout from "../images/logoutIcon.png";
import { Link, useLocation } from "react-router-dom";

function Maker() {
  const [isBurger, setIsBurger] = useState(false);
  const handleBurgerClick = () => {
    setIsBurger(!isBurger);
    console.log("burgerState", isBurger);
  };

  const handleSearch = (event) => {
    //setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.above}>
        <div className={styles.navTitle}>
          <img src={Logo} />
          <h6>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES-CAVITE</h6>
        </div>
        <div className={styles.navBurger} onClick={handleBurgerClick}>
          <img src={isBurger ? Close : Burger} sizes={50} />
        </div>
      </div>
      <div className={styles.con}>
        <div>
          <h1>STUDENT'S RECORD</h1>
        </div>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input type="search" className={styles.searchInput} />
            <button
              type="submit"
              onClick={handleSearch}
              className={styles.searchButton}
            >
              <img src={Search} />
            </button>
          </div>
          <div className={styles.spread}>
            <button onClick={Request}>
              <strong>Download CSV</strong>
            </button>
            <button onClick={Request}>
              <strong>QR Code</strong>
            </button>
          </div>
        </div>
        <div>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>LAST NAME</th>
                <th>FIRST NAME</th>
                <th>ID NUMBER</th>
                <th>COURSE</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td>Smith</td>
                <td>John</td>
                <td>123456</td>
                <td>Computer Science</td>
                <td>2023-08-20</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Doe</td>
                <td>Jane</td>
                <td>789012</td>
                <td>Electrical Engineering</td>
                <td>2023-08-21</td>
                <td>02:30 PM</td>
              </tr>
              <tr>
                <td>Johnson</td>
                <td>Michael</td>
                <td>345678</td>
                <td>Business Administration</td>
                <td>2023-08-22</td>
                <td>09:15 AM</td>
              </tr>
              <tr>
                <td>Williams</td>
                <td>Sarah</td>
                <td>901234</td>
                <td>Psychology</td>
                <td>2023-08-23</td>
                <td>11:45 AM</td>
              </tr>
              <tr>
                <td>Smith</td>
                <td>John</td>
                <td>123456</td>
                <td>Computer Science</td>
                <td>2023-08-20</td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>Doe</td>
                <td>Jane</td>
                <td>789012</td>
                <td>Electrical Engineering</td>
                <td>2023-08-21</td>
                <td>02:30 PM</td>
              </tr>
              <tr>
                <td>Johnson</td>
                <td>Michael</td>
                <td>345678</td>
                <td>Business Administration</td>
                <td>2023-08-22</td>
                <td>09:15 AM</td>
              </tr>
              <tr>
                <td>Williams</td>
                <td>Sarah</td>
                <td>901234</td>
                <td>Psychology</td>
                <td>2023-08-23</td>
                <td>11:45 AM</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* <div className={styles.left}>
          <div className={styles.left1}>
            <h2>STUDENT'S RECORD</h2>
            <div className={styles.spread1}>
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.spread}>
            <button onClick={Request}>
              <strong>Download CSV</strong>
            </button>
            <button onClick={Request}>
              <strong>QR Code</strong>
            </button>
          </div>
        </div> */}
      </div>
      {isBurger ? (
        <div className={styles.navCard}>
          <Link to="/home" onClick={handleBurgerClick}>
            <img src={Home} />
            Home
          </Link>
          <Link to="/">
            <img src={Logout} onClick={handleBurgerClick} />
            Logout
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Maker;
