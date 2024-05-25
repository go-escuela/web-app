import React, { useState } from "react";
import { TextInput, Checkbox } from "flowbite-react";

const NewMultipleChoice = () => {
  const [choices, setChoices] = useState([{ text: "", isCorrect: false }]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newChoices = [...choices];
    newChoices[index].text = event.target.value;
    setChoices(newChoices);

    if (event.target.value.length === 1 && index === choices.length - 1) {
      setChoices([...newChoices, { text: "", isCorrect: false }]);
    }
  };

  const handleCheckboxChange = (index: number) => {
    const newChoices = [...choices];
    newChoices[index].isCorrect = !newChoices[index].isCorrect;
    setChoices(newChoices);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(choices.filter((choice) => choice.text));
  };

  return (
    <form onSubmit={handleSubmit}>
      {choices.map((choice, index) => (
        <div className="mb-2 flex items-center space-x-2" key={index}>
          <div className="flex h-full items-center">
            <Checkbox
              id={`correct-${index}`}
              checked={choice.isCorrect}
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
          <TextInput
            id={`ans-${index}`}
            type="text"
            placeholder="Escribe Opción de Respuesta"
            value={choice.text}
            onChange={(event) => handleChange(index, event)}
            required={true}
            className="w-full"
          />
        </div>
      ))}
    </form>
  );
};

export default NewMultipleChoice;
