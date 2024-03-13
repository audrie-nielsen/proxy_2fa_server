const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ 
  target: 'https://dashboard.heroku.com/apps/obscure-lake-93009/api', 
  changeOrigin: true,
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
