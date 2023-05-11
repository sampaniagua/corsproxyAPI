const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// app.use(cors());
app.use(cors({ origin: '*' }));

// This is your proxy middleware configuration.
app.use('/sdapi', createProxyMiddleware({
  target: 'https://pyy7zm1qnwzcs1-3000.proxy.runpod.net',
  changeOrigin: true,
}));

app.listen(3000, function () {
  console.log('CORS-enabled web server with proxy listening on port 3000');
});

