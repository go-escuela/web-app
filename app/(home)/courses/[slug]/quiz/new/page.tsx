import NewQuiz from "@/app/components/courses/quiz/NewQuiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Quiz",
  description: "",
};

export default function Page() {
  return <NewQuiz />;
}
