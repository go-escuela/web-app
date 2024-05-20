import ActivityView from "@/app/components/courses/activities/activityView";
import QuizForm from "@/app/components/courses/quiz/create/newQuiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Tarea",
  description: "",
};

export default function Task() {
  return <QuizForm />;
}