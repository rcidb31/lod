require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Ruta de prueba
app.get('/api/actas', (req, res) => {
  res.json([{ id: 1, fecha: '2025-04-03', entregador: 'Raúl Cid' }]);
});

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor LOD corriendo en http://localhost:${PORT} (Trabajo de desarrollo web)`);
});


