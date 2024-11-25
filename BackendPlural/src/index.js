import express from "express";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from './config.js';
import path from 'path';
import cors from "cors";

const app = express();

// Configuración de CORS
app.use(cors({
    origin: 'https://frontend-equipo4.onrender.com', // URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use(paymentRoutes);

// Archivos estáticos
app.use(express.static(path.resolve('src/public')));

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
