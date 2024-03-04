'use client'
 
import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Context } from "./ContextProvider";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import ParcelasModal from './Installments';
import { initMercadoPago,
  createCardToken
} from '@mercadopago/sdk-react'


initMercadoPago('TEST-c6599800-5081-4af0-ab8b-7fb3e8066bb0');

const App = () => {


  const createNewToken = async (values) => {
    try {
      const cardToken = await createCardToken({
        cardNumber: values.numerodocartao,
        cardholderName: values.nomedotitular,
        cardExpirationMonth: values.mesdexpiracao,
        cardExpirationYear: values.anodexpiracao,
        securityCode: values.cvv,
        identificationType: "CPF",
        identificationNumber: values.numerodeidentificacao,
      });      
      
      console.log('Token criado com sucesso',cardToken);
      return cardToken;
      
    } catch (error) {
      console.log('erro ao criar token:', error);
    }
};

    const newPayment = async () => {
      try {
        const payment =   await fetch('http://localhost:8000/api/payments', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
          },
          body: JSON.stringify({
            transaction_amount: values.valordopagamento,
            installments: values.numerodeparcelas,
            token: cardToken,
            payment_method_id: values.paymentMethodId,
            payer: {
              payer_email: values.emaildopagador,
              payer_identification_type: "CPF",
              payer_identification_number: values.numerodeidentificacao
            }
          })
        })
  
        console.log('pagamento criado com sucesso');
        
      } catch (error) {
        throw new Error("erro ao criar um pagamento"); 
      }
    };
    
    const handleSubmit = async (values) => {
      
    try {
      const cardToken = await createNewToken(values);

      await newPayment(values, cardToken);
      
      console.log('Novo Pagamento finalizado');
    } catch (error) {
      console.error("Pagamento não finalizado:", error);
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 250, marginRight: 500, marginLeft: 100 }}>
      <div style={{ flex: 1, marginRight: 10 }}>
      <h1 style={{ fontWeight: 'bold' }}>Dados do Pagador</h1>
      <Formik
        initialValues={{ 
          emaildopagador: '',
          numerodeidentificacao: null,
          tipododocumento: 'CPF',
          valordopagamento: null,
          numerodocartao: null,
          nomedotitular: '',
          mesdexpiracao: null,
          anodexpiracao: null,
          cvv: null,
          numerodeparcelas: 1
          }}
        onSubmit={handleSubmit}
      >
        <Form>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="emaildopagador"></label>
        <Field 
        id="emaildopagador" 
        name="emaildopagador" 
        placeholder="Email do Pagador" 
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
        />
        </div>
        <div style={{ marginBottom: 10,marginTop: 30}} >
        <label htmlFor="cpf">CPF</label>
        <Field 
        id="cpf" 
        name="cpf"/>
        </div>
        <div style={{ marginBottom: 10,marginTop: 28}} >
        <label htmlFor="numerodeidentificacao"></label>
        <Field 
        id="numerodeidentificacao" 
        name="numerodeidentificacao" 
        placeholder="Numero de identificação" 
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
        </div>
        </Form>
    </Formik>
    </div>
    <div style={{ flex: 1 }}>
    <h1 style={{ fontWeight: 'bold' }}>Dados do Pagamento</h1>
    <Formik
    >     
        <Form>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="valordopagamento"></label>
        <Field 
        id="valordopagamento" 
        name="valordopagamento" 
        placeholder="Valor do pagamento" 
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
        />
        </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="numerodocartao"></label>
          <Field 
          id="numerodocartao" 
          name="numerodocartao" 
          placeholder="Numero do cartão" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="nomedotitular"></label>
          <Field 
          id="nomedotitular" 
          name="nomedotitular" 
          placeholder="Nome do titular" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="mesdexpiracao"></label>
          <Field 
          id="mesdexpiracao" 
          name="mesdexpiracao" 
          placeholder="Mês de expiração(MM)" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="anodexpiracao"></label>
          <Field 
          id="anodexpiracao" 
          name="anodexpiracao" 
          placeholder="Ano de expiração(YYYY)" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="cvv"></label>
          <Field 
          id="cvv" 
          name="cvv" 
          placeholder="CVV" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
          <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="numerodeparcelas">Selecione o número de parcelas</label>
          <Field 
           id="numerodeparcelas" 
           name="numerodeparcelas" 
           placeholder="numerodeparcelas" 
           style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%' }}>
          </Field>
        </div>
        </Form>
      </Formik>
      <div style={{ marginTop: 20, textAlign: 'center'}}>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none',borderRadius: '4px', fontsize: '16px', width: '100%'}}
      >PAGAR
      </button>
       </div>
    </div>
    </div>
  );
};
export default App;
