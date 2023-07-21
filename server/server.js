import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import utilityRoute from "./routes/utilityRoute.js";
import initializeSocket from "./helper/TypingRace.js";
import http from 'http'

dotenv.config();
//express app
const app = express();
const server = http.createServer(app);
initializeSocket(server);

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/utility", utilityRoute);

//port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`RUNNING ${port}`);
});
