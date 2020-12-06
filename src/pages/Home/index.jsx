import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function Home() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Página de Produtos"
        description="Para cadastrar um novo produto, preencha o formulário abaixo"
      />

      <main>
        <form>
          <fieldset>
            <legend>Dados do Produto</legend>
            <Input name="ProductName" label="Nome do Produto" />
            <div className="schedule-item">
              <Input name="PriceProduct" label="Valor unitário" type="text" />
              <Input name="Quantity" label="Quantidade" type="text" />
              <Input disabled name="email" label="Valor Total" type="text" />
            </div>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar Produto</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Home;
