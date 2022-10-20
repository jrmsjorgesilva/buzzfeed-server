import Route, { Response, Request } from "express";

const quizRouter = Route();

quizRouter.get("/", async (req: Request, res: Response) => {
  res.send("Quiz Route");
});

export default quizRouter;
