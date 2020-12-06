import React from 'react';

import './styles.css';

function ProductList() {
  return (
    <div className="productList-container">
      <main>
        <article className="teacher-item">
          <header>
            <div>
              <strong>Nome do Produto: </strong>
            </div>
          </header>
          <div key="SW" className="content">
            <p>
              nome:
              <strong>DEDE</strong>
            </p>
            <p>
              email:
              <strong> NOEDED</strong>
            </p>
            <div>
              <button type="button"></button>
            </div>
          </div>

          <footer></footer>
        </article>
      </main>
      </div>
  );
}

export default ProductList;
