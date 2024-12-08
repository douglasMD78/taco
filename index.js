const express = require('express');
const app = express();

// Usar a variável de ambiente PORT para funcionar no Render
const PORT = process.env.PORT || 3000;

// Endpoint básico para teste
app.get('/', (req, res) => {
  res.send('API TACO funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
