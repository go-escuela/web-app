import React, { useState } from "react";
import { TextInput, Radio } from "flowbite-react";

const NewSingleChoice = () => {
  const [choices, setChoices] = useState([{ text: "", isCorrect: false }]);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

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

  const handleRadioChange = (index: number) => {
    setSelectedChoice(index);
    const newChoices = choices.map((choice, idx) => ({
      ...choice,
      isCorrect: idx === index,
    }));
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
            <Radio
              id={`correct-${index}`}
              name="correctChoice"
              checked={choice.isCorrect}
              onChange={() => handleRadioChange(index)}
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

export default NewSingleChoice;
