import QuizForm from "@/app/components/quiz/create/newQuiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Quiz",
  description: "",
};

export default function Task() {
  return <QuizForm />;
}
