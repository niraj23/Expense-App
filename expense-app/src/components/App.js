import '../assets/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearNotifications } from '../actions';
import { authenticateUser } from '../slice/user';
import Home from './Home';
import Main from './Main';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import Dev from '../containers/Dev';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = "ec782c9839e4d50b2bf11f1ffa85037b2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const dispatch = useDispatch();
  const resetAlerts = () => dispatch(clearNotifications());

  useEffect(() => {
    const storage = localStorage.getItem('exp_tracker');
    if (storage) {
      dispatch(authenticateUser(JSON.parse(storage)));
    }
  }, []);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home reset={resetAlerts} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/app/*" element={<Main />} />
        <Route path="/devs" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
