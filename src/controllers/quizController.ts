import { Response, Request } from "express";
import buzzfeedMockData from "../database/buzzfeedMockData";

const getQuiz = async (req: Request, res: Response) => {
  res.send(...buzzfeedMockData);
};

export default getQuiz;
