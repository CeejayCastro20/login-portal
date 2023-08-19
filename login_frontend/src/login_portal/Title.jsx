import styles from './Title.module.css';
import Logo from '../images/logo.png';
import { useState } from 'react';
//import React, {useRef} from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

//import Swal from 'sweetalert2';
const Title = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    const handleTitleSubmit = (event) => {
        event.preventDefault();
      }; 

    //const Login = () => {
        //Swal.fire({
            //icon: "success",
            //title: "",
            //text: "Your registration has been confirmed",
            //showConfirmButton: true
            //buttons: {
                //cancel: "No",
                //confirm: "Yes"
              //},
              //dangerMode: true,
            //}).then((willDelete) => {
              //if (willDelete) {
               // swal("Poof! Your imaginary file has been deleted!", {
                  //icon: "success",
                //});
              //} else {
                //swal("Your imaginary file is safe!");
              //}
            //});
        //})
        //axios({
           // method: "post",
            //data: {
                //Uname: Username,
                //Pword: Password,
           // },
            //withCredentials: true,
            //url: "http://localhost:3000/"
        //}).then((response) => {
           // if(response.data.message === "Username Already Taken"){
               // console.log('done!');
          //  }
       // })
  //  };
    return (
        <form onSubmit={handleTitleSubmit}>
        <div>
            <div className={styles.container}>
                <div className={styles.con}>
                    <div className={styles.right}>
                    </div>

                    <div className={styles.left}>
                            <div className={styles.above}><img src={Logo}/><h6>Technological University of the Philippines - Cavite</h6></div>
                                <div className={styles.left1}>
                                    <h2>ID VALIDATION LOGIN PORTAL</h2>
                                        <p>User Authentication</p>
                                        <div className={styles.spread}>
                                            <input type='fn' value={Username} onChange={e => setUsername(e.target.value)} placeholder='Username'></input>
                                        </div>
                                        <div className={styles.spread}>
                                            <input type='ea' value={Password} onChange={e => setPassword(e.target.value)} placeholder='Password'></input>
                                        </div>
                                        <div className={styles.spread}>
                                            <p><a href="a">Forgot Password?</a></p>
                                        </div>
                                        <div className={styles.spread}>
                                            <Link to='/Home'><button>Log In</button></Link>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
        </form>
    );
    
};

export default Title;