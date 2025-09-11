import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './css/produtos.module.css';
import Head from './Head';

const Produtos = ({ produtos }) => {
  const params = useParams();

  const produtoAtual = produtos.find((p) => p.id === params.id);

  const precoApi = produtoAtual?.preco; // exemplo

  const preco = Number(precoApi?.replace(',', '.'));
  const formatado = `${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)}`;

  if (produtos.length > 0) {
    return (
      <div className={styles.produtosGrid}>
        <Head
          title={`Produto: ${produtoAtual.nome}`}
          description={produtoAtual.descricao}
        />
        <img src={produtoAtual.fotos[0].src} alt="" className={styles.img} />
        <div>
          <h3>{produtoAtual.nome}</h3>
          <p
            style={{
              backgroundColor: produtoAtual.vendido ? '#4caf50' : 'red',
            }}
            className={styles.preco}
          >
            {formatado}
          </p>
          <p className={styles.descricao}>{produtoAtual.descricao}</p>
        </div>
      </div>
    );
  }
};

export default Produtos;
