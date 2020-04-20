import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './style.css';

export default function Product(data) {
  const [product, setProduct] = useState({});

  useEffect(()=>{
    loadProducts();
  });

  async function loadProducts () {
    const response = await api.get(`products/${data.match.params.id}`);

    return setProduct(response.data);
  }

  return (
    <div className="product-info">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>URL: <a rel="noopener noreferrer" target="_blank" href={product.url} >{product.url}</a> </p>
    </div>
  );
}