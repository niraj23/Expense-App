import { Navbar, Nav } from 'rsuite';
import { NavLink } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
import { useEffect } from 'react';
import { FaCode, FaDoorOpen } from 'react-icons/fa';
import { signOutRequest } from '../actions';
import { useVerify } from '../hooks';

const NavBar = () => {
  const { loggedIn, dispatch, navigate } = useVerify();
  const handleSignOut = () => dispatch(signOutRequest());

  useEffect(() => {
    if (loggedIn === false) navigate('/', { replace: true });
  }, [loggedIn]);

return (
  <Navbar style={{background: '#09070d'}}>
    <Navbar.Brand style={{ color: '#61dafb'}}>Expense</Navbar.Brand>
    <Nav>
      <Nav.Item as={NavLink} to="/app" style={{ color: '#61dafb'}}>Categories</Nav.Item>
      <Nav.Item as={NavLink} to="/app/reports"style={{ color: '#61dafb' }}>Reports</Nav.Item>    
    </Nav>
    <Nav pullRight>
      <Nav.Item as={NavLink} to="/devs" icon={<FaCode /> } size="2em" style={{ color: '#61dafb' }}>Devs</Nav.Item>
      <Nav.Item as={NavLink} to="/" className="center" onClick={handleSignOut} icon={<FaDoorOpen/> } size="2em" style={{ color: '#61dafb' }}>Sign Out</Nav.Item>
    </Nav>
  </Navbar>
);
}

export default NavBar;
