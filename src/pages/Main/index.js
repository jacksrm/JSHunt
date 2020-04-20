import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default function Main() {
  const [products,setProducts]= useState([]);
  const [productsInfo,setProductsInfo]= useState({});
  const [page,setPage]= useState(1);

  useEffect(()=>{
    loadProducts();
  });

  async function loadProducts (page = 1) {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productsInfo } = response.data;

      setProducts(docs);
      setProductsInfo(productsInfo);
      setPage(page);
  }

  function prevPage() {
    if (page === 1) return;

    const pageNumber = page - 1;

    loadProducts(pageNumber);

  }

  function nextPage() {
    if (page === productsInfo.pages) return;

    const pageNumber = page + 1;

    loadProducts(pageNumber);

  }

  return (
    <div className="product-list">
      {products.map(product => (
        <article key={product._id}>
          <strong>{product.title}</strong>
          <p>{product.description}</p>
          <Link to={`product/${product._id}`} >Acessar</Link>
        </article>
      ))}
      <div className="action">
        <button disabled={page === 1} 
                onClick={prevPage}
                id="btn-prev"
        >
          Anterior
        </button>
        <button disabled={page === productsInfo.pages} 
                id="btn-next"
                onClick={nextPage}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}