import express from "express";
import energyRoutes from "./energy.routes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT_ENERGY || 5005;

app.use(express.json());

// Habilitar CORS
app.use(cors());

app.use("/api", energyRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
    }
);