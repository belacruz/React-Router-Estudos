import React from 'react';
import styles from './css/home.module.css';
import { NavLink } from 'react-router-dom';
import Head from './Head';

const Home = ({ produtos }) => {
  return (
    <div className={styles.container}>
      <Head title="Home" description="Página Home" />
      {produtos.map((p) => {
        return (
          <NavLink to={`produtos/${p.id}`} key={p.id} className={styles.card}>
            <img src={p.fotos[0].src} alt="" className={styles.image} />
            <h3>{p.nome}</h3>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Home;
