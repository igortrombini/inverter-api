const axios = require('axios');

//URL DA API 
const url = 'https://api.invertexto.com/v1/validator';

//SUBSTITUIOR O VALOR DO TOKEN
const token = '5345|BGluem3xQ9Z39Sh6TkCL5yyADjonhYCn';

//Subistituir o 11111111111 pelo documento que vc quer validar
const numeroDocumento = '23035415000104';

// Substitua 'SEUTIPO' pelo valor real do parâmetro "type" (cpf ou cnpj)
const tipoDocumento = 'cnpj';  // ou 'cnpj'


//parametros para consulta
const params = {
    token: token,
    value: numeroDocumento,
    type: tipoDocumento,
};

const headers = {
    Authorization: `Bearer ${token}`,
  };

//fazer a solicitação GET 
axios.get(url, { params })
    .then(response => {
        //se caso a resposta foi bem sucedida, podemos manipular os dados
        const resultado = response.data;
        console.log(resultado);
    })
    .catch(error => {
        console.error(`Erro ${error.response.status}: ${error.response.data}`);

    });