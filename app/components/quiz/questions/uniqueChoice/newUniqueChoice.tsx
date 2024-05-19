import React, { useState } from "react";
import { Label, Textarea, FileInput } from "flowbite-react";
import NewChoiceForm from "./newChoice";

const ChoiceQuiestionForm = () => {
  //Vars on form

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="">
        <h3 className="text-gray-800 mb-4 text-xl font-bold">
          Pregunta de Selección Unica
        </h3>
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
          <NewChoiceForm />
        </form>
      </div>
    </>
  );
};

export default ChoiceQuiestionForm;
