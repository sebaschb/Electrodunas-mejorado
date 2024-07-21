import express from "express";
import userRoutes from "./users.routes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT_USERS || 5000;

app.use(express.json());

// Habilitar CORS
app.use(cors());

app.use("/api", userRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
    console.log(`http://localhost:${port}`);
    }
);