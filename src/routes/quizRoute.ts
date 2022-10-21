import Route, { Response, Request } from "express";
import getQuiz from "../controllers/quizController";

const quizRouter = Route();

quizRouter.get("/", getQuiz);

export default quizRouter;
