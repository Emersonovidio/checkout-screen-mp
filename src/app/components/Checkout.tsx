'use client'
 
import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Context } from "./ContextProvider";
import { Formik, Field, Form, FormikHelpers } from 'formik';

 
const App = () => {
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, marginRight: 20 }}>
      <h1>Dados do Pagador</h1>
      <Formik>
        <Form>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="emaildopagador"></label>
        <Field id="emaildopagador" name="emaildopagador" placeholder="Email do Pagador" />
        </div>
        <div style={{ marginBottom: 20,marginTop: 20}} >
        <label htmlFor="numerodeidentificacao"></label>
          <Field id="numerodeidentificacao" name="numerodeidentificacao" placeholder="Numero de identificação" />
        </div>
        </Form>
    </Formik>
    </div>
    <div style={{ flex: 1 }}>
    <h1>Dados do Pagamento</h1>
    <Formik>
        <Form>
        <div style={{ marginBottom: 10 }}>
        <label htmlFor="valordopagamento"></label>
        <Field id="valordopagamento" name="valordopagamento" placeholder="Valor do pagamento" />
        </div>
        <div>
        <label htmlFor="numerodocartao"></label>
          <Field id="numerodocartao" name="numerodocartao" placeholder="Numero do cartão" />
          </div>
        <div>
          <label htmlFor="nomedotitular"></label>
          <Field id="nomedotitular" name="nomedotitular" placeholder="Nome do titular" />
          </div>
        <div>
          <label htmlFor="mesdexpiracao"></label>
          <Field id="mesdexpiracao" name="mesdexpiracao" placeholder="Mês de expiração(MM)" />
          </div>
        <div>
          <label htmlFor="anodexpiracao"></label>
          <Field id="anodexpiracao" name="anodexpiracao" placeholder="Ano de expiração(YYYY)" />
          </div>
        <div>
          <label htmlFor="cvv"></label>
          <Field id="cvv" name="cvv" placeholder="CVV" />
          </div>
        </Form>
    </Formik>
    </div>
    <div>
    <button style={{ flex: 1 }}
    type="submit">PAGAR
    </button>
    </div>
    </div>
  );
};

export default App;
