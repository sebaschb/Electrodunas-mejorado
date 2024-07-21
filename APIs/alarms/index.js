import express from "express";
import alarmsRoutes from "./alarms.routes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT_ALARMS || 5004;

app.use(express.json());

// Habilitar CORS
app.use(cors());

app.use("/api", alarmsRoutes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
    }
);