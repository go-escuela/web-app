"use client";
import React, { useState } from "react";
import { Radio, Label } from "flowbite-react";

interface Option {
  id: number;
  label: string;
}

const BooleanQuestionView = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const options: Option[] = [
    { id: 1, label: "Verdadero" },
    { id: 2, label: "Falso" },
  ];

  const handleOptionChange = (optionId: number) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-gray-800 mb-4 text-xl font-bold">
        Pregunta de Bolean
      </h3>
      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`border-gray-300 hover:bg-gray-100 flex cursor-pointer items-center rounded-md border p-4 ${
              selectedOption === option.id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleOptionChange(option.id)}
          >
            <Radio
              id={`option-${option.id}`}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
              className="border-gray-400 rounded-full border focus:ring-blue-500"
            />
            <Label
              htmlFor={`option-${option.id}`}
              className="text-gray-700 ml-2"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooleanQuestionView;
