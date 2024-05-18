"use client";
import React, { useState } from "react";
import { Checkbox, Label } from "flowbite-react";

interface Option {
  id: number;
  label: string;
}

const MultipleChoiceQuestion = () => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const options: Option[] = [
    { id: 1, label: "Opción 1" },
    { id: 2, label: "Opción 2" },
    { id: 3, label: "Opción 3" },
    { id: 4, label: "Opción 4" },
  ];

  const handleOptionChange = (optionId: number) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(optionId)) {
        // Deselect the option if it's already selected
        return prevSelectedOptions.filter((id) => id !== optionId);
      } else {
        // Select the option if it's not already selected
        return [...prevSelectedOptions, optionId];
      }
    });
  };

  const handleDivClick = (optionId: number) => {
    handleOptionChange(optionId);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-gray-800 mb-4 text-xl font-bold">
        Pregunta de opción múltiple
      </h3>
      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`border-gray-300 hover:bg-gray-100 flex cursor-pointer items-center rounded-md border p-4 ${
              selectedOptions.includes(option.id) ? "bg-gray-200" : ""
            }`}
            onClick={() => handleDivClick(option.id)}
          >
            <Checkbox
              id={`option-${option.id}`}
              checked={selectedOptions.includes(option.id)}
              className="border-gray-400 rounded focus:ring-blue-500"
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

export default MultipleChoiceQuestion;
