import {useRef, useState, useEffect} from 'react';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = = useState('');
  const [errMsg, setErrMsg] = = useState('');
  const [success, setSuccess] = = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  return (
   <section>
    <p ref={errRef} className={errMsg ? "errmsg" : 
    "offscreen:"} aria-live="assertive">{errMsge}</p>
    <h1>Log In</h1>
    <form>
      <label> htmlFor="username">Username:</label>
      <input 
        type="text" 
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e) => setUser(e.target.value)}
        value={user}
        required
      />
    </form>
   </section>
  )
}
