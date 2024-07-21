import express from "express";
import readingsRoutes from "./readings.routes.js"
import cors from "cors";

const app = express();

const port = process.env.PORT_READINGS || 5002;

app.use(express.json());

// Habilitar CORS
app.use(cors());

app.use("/api", readingsRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
    }
);

//majea el errpr
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});