import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import './index.css';
function App() {
  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=559ff8d607684dc1a8af707e303557b0`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />

      <div className="container__width container">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
