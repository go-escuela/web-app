import BooleanQuestionView from "@/app/components/courses/quiz/questions/viewsQuestion/BooleanQuestionView";
import MultipleChoiceQuestionView from "@/app/components/courses/quiz/questions/viewsQuestion/MultipleChoiceQuestionView";
import OpenQuestionView from "@/app/components/courses/quiz/questions/viewsQuestion/OpenQuiestionView";
import SingleChoiceQuestionView from "@/app/components/courses/quiz/questions/viewsQuestion/SingleChoiceQuestionView";
import { Button } from "flowbite-react";
import React, { useState } from "react";

export default function Page() {

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to backend
  };

  return (
    <>
      <h1 className="text-gray-800 mb-4 text-center text-4xl font-bold dark:text-white">
        Lorem QUIZ
      </h1>
      <BooleanQuestionView/>
      <MultipleChoiceQuestionView/>
      <OpenQuestionView/>
      <SingleChoiceQuestionView/>
      <Button className="w-full place-content-center">Entrega Examen</Button>
    </>
  );
};

