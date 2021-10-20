const axios = require('axios');
const data = {
  jsonrpc: '2.0',
  params: {
    db: 'oce01',
    login: 'admin',
    password: 'admin'
  }
};

const config = {
  method: 'get',
  url: 'http://localhost:8069/web/session/authenticate',
  headers: {
    'Content-Type': 'application/json',
  },
  data
};

console.log(data)
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
