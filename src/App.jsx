import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import './css/global.css';
import Produtos from './Produtos';
import Contato from './Contato';
import Animation from './Animation';

const App = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    async function fethProdutos() {
      try {
        const response = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.log('Erro ao buscar produtos:', error);
      }
    }
    fethProdutos();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Animation>
          <Routes>
            <Route path="/" element={<Home produtos={produtos} />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/produtos/:id"
              element={<Produtos produtos={produtos} />}
            />
          </Routes>
        </Animation>
      </div>
    </BrowserRouter>
  );
};

export default App;
