import React, { useState } from "react";
import { Label, Textarea, FileInput } from "flowbite-react";

const OpenQuestionForm = () => {
  //Vars on form

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="">
        <div>
          <h3 className="text-gray-800 mb-4 text-xl font-bold">
            Pregunta Abierta
          </h3>
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="ask" value="Ingresa una Respuesta" />
          </div>
          <Textarea
            id="ask"
            placeholder="Escribe una Respuesta"
            required={true}
            rows={4}
          />
        </div>
      </div>
    </>
  );
};

export default OpenQuestionForm;
