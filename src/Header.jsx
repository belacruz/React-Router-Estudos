import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to=""
          end
          style={
            ({ isActive }) =>
              isActive
                ? {
                    backgroundColor: '#ccc',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                  }
                : undefined // retorna undefined quando não ativo
          }
          className={styles.button}
        >
          Produtos
        </NavLink>
        <NavLink
          to="/contato"
          className={styles.button}
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: '#ccc',
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                }
              : undefined
          }
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
