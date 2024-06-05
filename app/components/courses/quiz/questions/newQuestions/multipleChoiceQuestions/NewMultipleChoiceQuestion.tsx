"use client";

import React, { useState } from "react";
import { Label, Textarea } from "flowbite-react";
import NewMultipleChoice from "./NewMultipleChoice";

const NewMultipleChoiceQuestion = () => {
  //Vars on form

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="">
        <h4 className="text-gray-800 mb-4 text-base font-bold">
          Pregunta de Selección Multiple
        </h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="ask" value="Ingresa una Pregunta" />
            </div>
            <Textarea
              id="ask"
              placeholder="Escribe una Pregunta"
              required={true}
              rows={4}
            />
          </div>
          <NewMultipleChoice />
        </form>
      </div>
    </>
  );
};

export default NewMultipleChoiceQuestion;
