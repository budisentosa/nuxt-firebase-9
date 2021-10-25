const express = require('express')
const OdooRPC = require('@budi/odoo-jsonrpc')
const axios = require('axios');
const data = {
  jsonrpc: '2.0',
  params: {
    db: 'oce01',
    login: 'admin',
    password: 'admin'
  }
};
const odoo = new OdooRPC({
  host: 'http://localhost:8069',
  database: 'oce01',
  username: 'admin',
  password: 'admin',
})
let tmpCookie = ''

const app = express()

app.get('/', function (req, res, next) {
  // console.log('req', req)
  const bb = odoo.login('admin', 'admin')
  debugger
  console.log(bb)
  const aa = odoo.env('res.partner').browse(1)
  console.log(aa)
  return res.json({ it: bb })
})

app.get('/aa', async (req, res) => {
  console.log('aa')
  const result = await odoo.login('admin', 'admin')
  const aa = await odoo.env('res.partner').browse(1)
  console.log(result)
  console.log(process.env.odooPrivate)
  res.json(aa)
})

app.get('/bb', async (req, res) => {
  try {
    // await odoo.login('admin', 'admin')
    // const partner_ids = await odoo.env('res.partner').search_read([
    //     ['name', '=', 'Test']
    // ], ['name', 'email'])
    const total = await odoo.env('res.partner').search_count([
      ['name', '=', 'Test']
    ])
    console.log(total)
    // const aa = await odoo.env('res.partner').search_read([
    //   ['name', 'like', 'azure'],
    // ], ['name', 'email']
    // )
    res.json(total)
  } catch (error) {
    console.log(error)
  }
})

app.get('/cc', async (req, res) => {
  const config = {
    method: 'get',
    url: 'http://localhost:8069/web/session/authenticate',
    headers: {
      'Content-Type': 'application/json',
    },
    data
  };

  console.log(data)
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      tmpCookie = response.headers['set-cookie'][0]
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
})

app.get('/dd', async (req, res) => {
  const payload = JSON.stringify({
    jsonrpc: '2.0',
    method: 'call',
    params: {
      model: 'sale.order',
      limit: 10,
      offset: 0,
      domain: [
        [
          'name',
          '=',
          'S00007'
        ]
      ]
    }
  });
  const config = {
    method: 'get',
    url: 'http://localhost:8069/web/dataset/search_read',
    headers: {
      'Content-Type': 'application/json',
      Cookie: tmpCookie
    },
    data: payload
  };

  console.log(data)
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
})

module.exports = {
  path: '/aaaa',
  handler: app
}
