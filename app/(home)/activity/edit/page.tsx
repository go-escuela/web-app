import EditTask from "@/app/components/courses/activities/editActivity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Editar Tarea",
  description: "",
};

export default function Task() {
  return <EditTask />;
}
