import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
import styles from './Helper.module.css';

const ListadoNoticias = ({ noticias }) => {
  return (
    <div className={`${styles.d_grid} `}>
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired,
};

export default ListadoNoticias;
