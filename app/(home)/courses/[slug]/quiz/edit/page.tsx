import EditQuiz from "@/app/components/courses/quiz/edit/editQuiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Editar quiz",
  description: "",
};

export default function Task() {
  return <EditQuiz />;
}