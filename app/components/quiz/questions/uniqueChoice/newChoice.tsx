import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

const NewChoiceForm = () => {
  //Vars on form

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <TextInput
          id="ans"
          type="text"
          placeholder="Escribe Opción de Respuesta"
          required={true}
        />
      </div>
      <Button type="submit">Agregar Opción de Respuesta</Button>
    </>
  );
};

export default NewChoiceForm;
