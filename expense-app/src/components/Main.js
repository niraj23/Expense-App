import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useVerify } from '../hooks';
import Navbar from './Nav';
import Lists from '../containers/Lists';
import Tracker from '../containers/Tracker';
import Reports from '../containers/Reports';

const Main = () => {
  const { loggedIn, navigate } = useVerify();

  useEffect(() => {
    if (loggedIn === false) navigate('/', { replace: true });
  }, [loggedIn]);

  return (
    <div className="vh-100 position-relative">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default Main;
