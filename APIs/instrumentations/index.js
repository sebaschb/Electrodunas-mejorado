import express from "express";
import instrumentationsRoutes from "./instrumentations.routes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT_INSTRUMENTATIONS || 5003;

app.use(express.json());

// Habilitar CORS
app.use(cors());

app.use("/api", instrumentationsRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
    }
);