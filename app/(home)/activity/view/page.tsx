import ActivityView from "@/app/components/courses/activities/activityView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Agregar Tarea",
  description: "",
};

export default function Task() {
  return <ActivityView />;
}
