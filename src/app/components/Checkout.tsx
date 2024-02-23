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
        <Field id="firstName" name="firstName" placeholder="Valor do pagamento" />
        <label htmlFor="firstName"></label>
          <Field id="firstName" name="firstName" placeholder="Numero do cartão" />
          <label htmlFor="firstName"></label>
          <Field id="firstName" name="firstName" placeholder="Mês de expiração(MM)" />
          <label htmlFor="firstName"></label>
          <Field id="firstName" name="firstName" placeholder="Ano de expiração(YYYY)" />
          <label htmlFor="lastName"></label>
          <Field id="lastName" name="lastName" placeholder="CVV" />
        </Form>
    </Formik>
    <button
    type="submit">Pagar
    </button>
    </div>
  );
};

export default App;
