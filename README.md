# Validador de Documentos - API Invertexto

Este arquivo contém um script em JavaScript para validar documentos usando a API da Invertexto. Ele utiliza o módulo Axios para fazer solicitações HTTP.

## Como Usar

1. Instale o Node.js em sua máquina, se ainda não estiver instalado.
2. Crie um novo projeto Node.js ou adicione este script a um projeto existente.
3. Instale o módulo Axios usando `npm install axios`.
4. Substitua os valores das variáveis `token`, `numeroDocumento` e `tipoDocumento` conforme necessário.
5. Execute o script usando `node nome_do_arquivo.js`.
6. Verifique o resultado da validação no console.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Axios**: Cliente HTTP baseado em Promises para fazer solicitações para a API da Invertexto.

## Exemplo de Uso

```javascript
const axios = require('axios');

// URL DA API
const url = 'https://api.invertexto.com/v1/validator';

// SUBSTITUA O VALOR DO TOKEN
const token = '5345|BGluem3xQ9Z39Sh6TkCL5yyADjonhYCn';

// Substitua o '11111111111' pelo documento que você quer validar
const numeroDocumento = '23035415000104';

// Substitua 'SEUTIPO' pelo valor real do parâmetro "type" (cpf ou cnpj)
const tipoDocumento = 'cnpj';  // ou 'cnpj'

// Parâmetros para consulta
const params = {
    token: token,
    value: numeroDocumento,
    type: tipoDocumento,
};

const headers = {
    Authorization: `Bearer ${token}`,
};

// Fazer a solicitação GET 
axios.get(url, { params })
    .then(response => {
        // Se a resposta for bem sucedida, manipule os dados
        const resultado = response.data;
        console.log(resultado);
    })
    .catch(error => {
        console.error(`Erro ${error.response.status}: ${error.response.data}`);
    });
