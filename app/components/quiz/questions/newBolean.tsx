import React, { useState } from "react";
import { Label, Textarea, Select, FileInput } from "flowbite-react";

const TrueFalseForm = () => {
  //Vars on form
  const [description, setDescription] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to back end
    console.log("Descripción:", description);
  };

  return (
    <>
      <div className="">
        <div>
          <h3 className="text-gray-800 mb-4 text-xl font-bold">
            Pregunta de Bolean
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
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label
              htmlFor="typeAsk"
              value="Selecciona si el enunciado es Verdadero o Falso"
            />
          </div>
          <Select id="typeAsk" required>
            <option>Verdadero</option>
            <option>Falso</option>
          </Select>
        </div>
      </div>
    </>
  );
};

export default TrueFalseForm;
