import React from 'react'

import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg';
const RegisterProduct = () => {
  return (
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
  );
};
export default RegisterProduct;
