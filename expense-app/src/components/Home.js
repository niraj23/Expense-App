import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useVerify } from '../hooks';
import { Helmet } from 'react-helmet';
import '../assets/home.css';



const Home = () => {
  const { loggedIn, navigate } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('app');
  }, []);

  return (
    <div className="banner-area">
        <div className="banner-text">
            <h1>Expense's Made Easy</h1>
            <p>Welcome to Expense's made easy, and app which will help you manage and track all of your expenses. You
              can keep up to date with our easy to use services. With our easy to visualize charts you will be able to see 
              all your spending in a nice chart
            </p>
            <a href="/signup">Signup</a>
            <a href="/login">Login</a>
        </div>
    </div>

  );
};

Home.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default Home;
