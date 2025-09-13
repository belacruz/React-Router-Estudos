import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/animation.css';

const Animation = ({ children }) => {
  const location = useLocation();
  const containerRef = React.useRef();

  React.useEffect(() => {
    const el = containerRef.current;
    el.classList.add('fade');

    const timeout = setTimeout(() => {
      el.classList.remove('fade');
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);

  return <div ref={containerRef}>{children}</div>;
};

export default Animation;
