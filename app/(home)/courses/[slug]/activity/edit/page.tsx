import EditActivity from "@/app/components/courses/activity/EditActivity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Editar Tarea",
  description: "",
};

export default function Page() {
  return <EditActivity />;
}
