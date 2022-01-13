import { Link } from 'react-router-dom';
import { FaHome, FaSpinner } from 'react-icons/fa';
import { useEffect } from 'react';
import { useFormState, useVerify } from '../hooks';
import { clearNotifications, logInRequest } from '../actions';
import '../assets/LogIn.css';

const LogIn = () => {
  const { state, handleChange } = useFormState({ username: '', password: '' });

  const {
    loggedIn, isLoading, error, dispatch, navigate,
  } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('/app', { replace: true });
  }, [loggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInRequest(state));
  };

  const resetFlash = () => {
    if (error !== null) dispatch(clearNotifications());
  };

  return (
      <div className="mw-md mx-auto">
        {isLoading ? <p className="page-loading"><FaSpinner /></p>
          : (
        <form onSubmit={handleSubmit}>
          <h1><Link to="/"><FaHome className="display-6 mb-3" /></Link> Log In</h1>
          <div className="inset">
          <p>
            <label for="username">USERNAME</label>
            <input  type="text" name="username" minLength={2} value={state.username} onChange={handleChange} required />
          </p>
          <p>
            <label for="password">PASSWORD</label>
            <input type="password" name="password" minLength={6} value={state.password} onChange={handleChange} required />
          </p>
          <p>
            <input type="checkbox" name="remember" id="remember"/>
            <label for="remember" style={{display: 'inline'}}> Remember me </label>
          </p>
          </div>
          <p className="p-container">
            <button className="btn mb-3 w-100" type="submit">Log in</button>
            <p>Don't have an account? <Link to="/signup" onClick={resetFlash}>Sign up</Link></p>
          </p>
          </form>
       
          )}
      </div>
  );
};

export default LogIn;
