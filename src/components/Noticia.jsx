import React from 'react';
import PropTypes from 'prop-types';
import styles from './Helper.module.css';

const Noticia = ({ noticia }) => {
  //extraer los datos
  const { urlToImage, url, title, description, source } = noticia;

  const imagen = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : (
    <div className="card-image">
      <img
        src="https://lightwidget.com/wp-content/uploads/local-file-not-found-480x488.png"
        alt="No Imagen"
      />
      <span className="card-title">{source.name}</span>
    </div>
  );
  return (
    <div className={`${styles.d_grid} `}>
      <div className={`${styles.card_adjust} card hoverable`}>
        {imagen}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
};

export default Noticia;
