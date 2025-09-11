import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './css/animation.css';

const Animation = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add('fade');

    const timeout = setTimeout(() => {
      document.body.classList.remove('fade');
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);
  return <div>{children}</div>;
};

export default Animation;
