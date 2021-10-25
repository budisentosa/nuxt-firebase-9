const axios = require('axios');
const varUrl = 'http://localhost:8069/jsonrpc'
const dbname = 'oce01'
const uid = 2
const password = 'admin'

const config = {
  url: varUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};
// -------------------------------search_read
const payload = JSON.stringify({
  jsonrpc: '2.0',
  params: {
    model: 'res.partner',
    service: 'object',
    method: 'execute',
    args: [
      dbname,
      uid,
      password,
      'res.partner',
      'search_read',
      [], // domain
      ['name', 'country_id', 'comment'], // fields
      0, // offset
      2 // limit
    ],
  }
});
config.data = payload

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    // res.json(response.data)
  })
  .catch(function (error) {
    console.log('err 65')
    console.log(error);
  });
// -------------------------------search
const payloadSearch = JSON.stringify({
  jsonrpc: '2.0',
  params: {
    model: 'res.partner',
    service: 'object',
    method: 'execute',
    args: [
      dbname,
      uid,
      password,
      'res.partner',
      'search',
      [['id', '=', 14]]

    ],
  }
});

config.data = payloadSearch

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    // res.json(response.data)
  })
  .catch(function (error) {
    console.log('err 65')
    console.log(error);
  });

// ------------------------------ write
const payloadWrite = JSON.stringify({
  jsonrpc: '2.0',
  params: {
    model: 'res.partner',
    service: 'object',
    method: 'execute',
    args: [
      dbname,
      uid,
      password,
      'res.users',
      'write',
      2,
      { name: 'aaa' }

    ],
  }
});
config.data = payloadWrite

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    // res.json(response.data)
  })
  .catch(function (error) {
    console.log('err 65')
    console.log(error);
  });
// ------------------------------ create
const payloadCreate = JSON.stringify({
  jsonrpc: '2.0',
  params: {
    model: 'res.partner',
    service: 'object',
    method: 'execute',
    args: [
      dbname,
      uid,
      password,
      'res.partner',
      'create',
      { name: 'aaa2BBBB' }
    ],
  }
});
config.data = payloadCreate

axios(config)
  .then(function (response) {
    console.log('create, ', JSON.stringify(response.data));
    // res.json(response.data)
  })
  .catch(function (error) {
    console.log('err 65')
    console.log(error);
  });

// ------------------------------ delete
const payloadDelete = JSON.stringify({
  jsonrpc: '2.0',
  params: {
    model: 'res.partner',
    service: 'object',
    method: 'execute',
    args: [
      dbname,
      uid,
      password,
      'res.partner',
      'unlink',
      [52]
    ],
  }
});
config.data = payloadDelete
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    // res.json(response.data)
  })
  .catch(function (error) {
    console.log('err 65')
    console.log(error);
  });
