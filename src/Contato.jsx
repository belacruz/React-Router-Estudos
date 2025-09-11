import React from 'react';
import styles from './css/produtos.module.css';
import Head from './Head';

const Contato = () => {
  return (
    <div className={styles.produtosGrid}>
      <Head title="Contato" description="Página contato" />
      <img
        src="../assets/contato.jpg"
        alt="Maquina de escrever"
        className={styles.img}
      />
      <div>
        <h3>Entre em contato.</h3>
        <p>• liphebc@gmail.com</p>
        <p>• (62) 98240-0716</p>
      </div>
    </div>
  );
};

export default Contato;
