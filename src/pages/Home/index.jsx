import React from 'react';

import ProductTable from '../../container/ProductTable';
import RegisterProductForm from '../../container/RegisterProductForm';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import './styles.css';

const Home = () => {
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
        <RegisterProductForm />
      </div>

      <div className="product-list">
        <ProductTable />
      </div>
    </div>
  );
};

export default Home;
