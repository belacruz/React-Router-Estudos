import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './css/produtos.module.css';
import Head from './Head';
import Slide from './Slide';

const Produtos = ({ produtos }) => {
  const params = useParams();

  const produtoAtual = produtos.find((p) => p.id === params.id);

  const precoApi = produtoAtual?.preco;

  const preco = Number(precoApi?.replace(',', '.'));
  const formatado = `${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)}`;

  let fotosRenderizadas = (
    <img
      src={produtoAtual?.fotos[0].src}
      alt={produtoAtual?.descricao}
      className={styles?.img}
    />
  );

  if (produtoAtual?.fotos?.length > 1) {
    fotosRenderizadas = <Slide slides={produtoAtual.fotos} />;
  }

  if (produtos.length > 0) {
    return (
      <div className={styles.produtosGrid}>
        <Head
          title={`Produto: ${produtoAtual.nome}`}
          description={produtoAtual.descricao}
        />
        {fotosRenderizadas}
        <div>
          <h3>{produtoAtual.nome}</h3>
          <p
            className={
              produtoAtual.vendido
                ? `${styles.preco} ${styles.precoCor}`
                : styles.preco
            }
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
