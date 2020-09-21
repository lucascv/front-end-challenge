import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';
import PropTypes from 'prop-types';

export default function Card({ post }) {
  const { semImagem } = useContext(Context);

  return (
    <div>
      <img src={(post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : semImagem} alt="Imagem destacada" />
      <h3>{post.title.rendered}</h3>
      <Link
        to={`/${post.slug}`}
      >
        {post.slug}
      </Link>
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};
