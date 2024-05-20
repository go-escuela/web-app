import BoleanQuestion from "@/app/components/courses/quiz/viewsQuestion/boleanView";
import OpenQuestion from "@/app/components/courses/quiz/viewsQuestion/openQuiestionView";
import MultipleChoiceQuestion from "@/app/components/courses/quiz/viewsQuestion/multipleChoiceView";
import { Metadata } from "next";
import UniqueChoiceQuestion from "@/app/components/courses/quiz/viewsQuestion/uniqueChoiceView";

export const metadata: Metadata = {
  title: "Go-escuela | pregunta",
  description: "",
};

export default function Task() {
  return (
    <div className="space-y-8 p-4">
      <MultipleChoiceQuestion />
      <BoleanQuestion />
      <OpenQuestion />
      <UniqueChoiceQuestion />
    </div>
  );
}
