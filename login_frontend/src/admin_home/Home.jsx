import React from 'react'
import styles from './Home.module.css';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const handleSearch = (event) => {
  //setSelectedValue(event.target.value);
};
function Home() {
  return (
    <div>
    <div className={styles.container}>
        <div className={styles.con}>
        <div className={styles.above}><img src={Logo}/><h6>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES-CAVITE</h6></div>
            <div className={styles.spread1}>
            <Link to='/Validation'><button>VALIDATION</button></Link>
            </div>
            <div className={styles.spread2}>    
            <Link to='/Request'><button>REQUEST</button></Link>
            </div>
            <div className={styles.spread3}>  
            <Link to='/ID MAKER'><button>ID MAKER</button></Link>
            </div>

        </div>     
    </div>
    </div>

  )
}

export default Home;