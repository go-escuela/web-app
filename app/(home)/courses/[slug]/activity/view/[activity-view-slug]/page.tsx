import ActivityView from "@/app/components/courses/activity/ActivityView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Tarea",
  description: "",
};

export default function Page() {
  return <ActivityView />;
}
