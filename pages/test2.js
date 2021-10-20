const axios = require('axios');
const data = JSON.stringify({
  jsonrpc: '2.0',
  params: {
    db: 'oce01',
    login: 'admin',
    password: 'admin'
  }
});

const config = {
  method: 'post',
  url: 'http://localhost:3004/posts',
  headers: {
    'Access-Control-Request-Headers': '*',
    'Content-Type': 'application/json',
    Cookie: 'session_id=a78e835b06edd9ea1ebea93bc47f30d01b639f1c'
  },
  data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
