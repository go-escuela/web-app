import TaskForm from "@/app/components/courses/activities/newActivity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Tarea",
  description: "",
};

export default function Task() {
  return <TaskForm />;
}
