import React, { useState } from "react";
import { TextInput } from "flowbite-react";

const NewChoiceForm = () => {
  const [choices, setChoices] = useState([""]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newChoices = [...choices];
    newChoices[index] = event.target.value;
    setChoices(newChoices);

    if (event.target.value.length === 1 && index === choices.length - 1) {
      setChoices([...newChoices, ""]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(choices.filter((choice) => choice));
  };

  return (
    <form onSubmit={handleSubmit}>
      {choices.map((choice, index) => (
        <div key={index}>
          <TextInput
            className="pt-1"
            id={`ans-${index}`}
            type="text"
            placeholder="Escribe Opción de Respuesta"
            value={choice}
            onChange={(event) => handleChange(index, event)}
            required={true}
          />
        </div>
      ))}
    </form>
  );
};

export default NewChoiceForm;
