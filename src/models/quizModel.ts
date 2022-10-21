export default interface QuizModel {
  quizId: string;
  title: string;
  subtitle: string;
  content: Content[];
  answer: Answer[];
}

export interface Content {
  id: number;
  text: string;
  questions: Question[];
}

export interface Question {
  text: string;
  image: string;
  alt: string;
  credit: string;
}

export interface Answer {
  combination: string[];
  text: string;
  image: string;
  alt: string;
}
