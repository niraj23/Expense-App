import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const UserForm = ({
  auth,
  username,
  email,
  password,
  confirm,
  setter,
  submit,
  reset,
}) => (
  <form className={auth ? 'py-3' : 'py-1'} onSubmit={submit}>
     <h1><Link to="/"><FaHome className="display-6 mb-3" /></Link>Sign up</h1>
  <div className="inset">
  <p>
    <label for="username">USERNAME</label>
    <input  type="text" name="username" minLength={2} value={username} onChange={setter} required />
  </p>
  <p>
    <label for="email">EMAIL</label>
    <input  type="text" name="email" value={email} onChange={setter} required />
  </p>
  <p>
    <label for="password">PASSWORD</label>
    <input type="password" name="password" minLength={6} value={password} onChange={setter} required  />
  </p>
  <p>
    <label for="password">PASSWORD CONFIRMATION</label>
    <input type="password" name="password_confirmation" minLength={6} value={confirm} onChange={setter} required />
  </p>
  </div>
  <p className="p-container">
    <button className="btn mb-3 w-100" type="submit">Sign Up</button>
    <p>Already have an account? <Link to="/login" onClick={reset}>Login In</Link></p>

  </p>
  </form>
  
);

UserForm.propTypes = {
  auth: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  confirm: PropTypes.string,
  setter: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  reset: PropTypes.func,
};

UserForm.defaultProps = {
  password: '',
  confirm: '',
  reset: () => {},
};

export default UserForm;
