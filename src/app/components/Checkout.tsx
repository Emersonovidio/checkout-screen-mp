'use client'
 
import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Context } from "./ContextProvider";
import { Formik, Field, Form, FormikHelpers } from 'formik';

 
const App = () => {
    
  return (
    <div>
      <h1>Dados do Pagador</h1>
    <h1>Dados do Pagamento</h1>
      <Formik>
        <Form>
        <label htmlFor="valordopagamento"></label>
        <Field id="valordopagamento" name="valordopagamento" placeholder="Valor do pagamento" />
        <label htmlFor="numerodocartao"></label>
          <Field id="numerodocartao" name="numerodocartao" placeholder="Numero do cartão" />
          <label htmlFor="nomedotitular"></label>
          <Field id="nomedotitular" name="nomedotitular" placeholder="Nome do titular" />
          <label htmlFor="mesdexpiracao"></label>
          <Field id="mesdexpiracao" name="mesdexpiracao" placeholder="Mês de expiração(MM)" />
          <label htmlFor="anodexpiracao"></label>
          <Field id="anodexpiracao" name="anodexpiracao" placeholder="Ano de expiração(YYYY)" />
          <label htmlFor="cvv"></label>
          <Field id="cvv" name="cvv" placeholder="CVV" />
        </Form>
    </Formik>
    <button
    type="submit">Pagar
    </button>
    </div>
  );
};

export default App;
