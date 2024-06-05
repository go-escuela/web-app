import NewActivity from "@/app/components/courses/activity/NewActivity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Tarea",
  description: "",
};

export default function Page() {
  return <NewActivity />;
}
