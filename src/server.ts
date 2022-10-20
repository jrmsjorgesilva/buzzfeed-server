import cors from "cors";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
// routes
import quizRoute from "./routes/quizRoute";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use(express.json());

// Routes
server.use("/$", (req: Request, res: Response) => {
  res.send("Hello Root Route");
});
server.use("/quiz", quizRoute);
server.use("/*", (req: Request, res: Response) => {
  res.send("Not Found Route");
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
