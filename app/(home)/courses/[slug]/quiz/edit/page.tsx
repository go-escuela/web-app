import EditQuiz from "@/app/components/courses/quiz/EditQuiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Editar quiz",
  description: "",
};

export default function Page() {
  return <EditQuiz />;
}
