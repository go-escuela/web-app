"use client";
import React, { useState, ReactNode } from "react";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import MenuModal from "../questions/newQuestion";

const QuizForm = () => {
  const [selectedComponents, setSelectedComponents] = useState<ReactNode[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Título:", title);
    console.log("Descripción:", description);
  };

  const addComponent = (component: ReactNode) => {
    setSelectedComponents((prevComponents) => [...prevComponents, component]);
  };

  const removeComponent = (index: number) => {
    setSelectedComponents((prevComponents) =>
      prevComponents.filter((_, i) => i !== index),
    );
  };

  return (
    <>
      <div className="bg-gray-100 flex min-h-screen items-start justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg lg:w-2/4"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Título del Quiz" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Ingresa el título del Quiz"
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Descripción del Quiz" />
            </div>
            <Textarea
              id="description"
              placeholder="Ingresa una descripción para el Quiz"
              required={true}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="dueDate" value="Fecha de Entrega" />
            </div>
            <TextInput
              id="dueDate"
              type="date"
              required={true}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="percentage" value="Porcentaje del Quiz" />
            </div>
            <TextInput
              id="percentage"
              type="text"
              placeholder="Ingresa el Porcentaje del Quiz"
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {selectedComponents.map((Component, index) => (
              <div
                key={index}
                className="border-gray-300 relative mt-4 rounded-lg border p-4"
              >
                <Button
                  color="red"
                  size="xs"
                  className="absolute right-2 top-2"
                  onClick={() => removeComponent(index)}
                >
                  X
                </Button>
                {Component}
              </div>
            ))}
          </div>
          <MenuModal addComponent={addComponent} />
          <Button type="submit">Crear Quiz</Button>
        </form>
      </div>
    </>
  );
};

export default QuizForm;
