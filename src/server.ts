import cors from "cors";
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8080;

server.use(cors());
server.use(express.json());

server.use("/", (req: Request, res: Response) => {
  res.send("Hello Root Route");
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
