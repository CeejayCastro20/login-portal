import React from 'react'
import styles from './Request.module.css';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const handleSearch = (event) => {
  //setSelectedValue(event.target.value);
};
function Request() {
  return (
    <div>
    <div className={styles.container}>
        <div className={styles.con}>
            <div className={styles.left}>
                    <div className={styles.above}><img src={Logo}/><h6>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES-CAVITE</h6></div>
                        <div className={styles.left1}>
                            <h2>STUDENT'S RECORD</h2>
                            <div className={styles.spread1}>
                           <button onClick={handleSearch}>Search</button> 
                        </div>
                        </div>
            </div>
            <div className={styles.right}>
            <div className={styles.spread}>
                <button onClick={Request}><strong>Download CSV</strong></button>
                <button onClick={Request}><strong>QR Code</strong></button>
            </div> 
            </div>
        </div>     
    </div>
    </div>

  )
}

export default Request