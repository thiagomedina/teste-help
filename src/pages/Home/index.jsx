import React from 'react';

import ProductTable from '../../container/ProductTable';
import RegisterProduct from '../../container/RegisterProduct';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function Home() {
  return (
    <div className="container-home">
      <div id="page-product-form" className="container">
        <PageHeader
          title="Página de Produtos"
          description="Para cadastrar um novo produto, preencha o formulário abaixo"
        />
        <div id="search-products" className="container">
          <Input name="search" placeholder="Pesquisar produtos..." />
        </div>
        <RegisterProduct />
      </div>

      <div className="product-list">
        <ProductTable />
      </div>
    </div>
  );
}

export default Home;
