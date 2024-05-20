"use client";

import React, { useState } from "react";
import {
  Label,
  TextInput,
  Textarea,
  Button,
  Modal,
  Select,
} from "flowbite-react";
import QuestionForm from "../questions/newQuestion";

const EditQuiz = () => {
  //Vars on form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to back end
    console.log("Título:", title);
    console.log("Descripción:", description);
  };

  return (
    <>
      <div className="bg-gray-100 flex min-h-screen items-start justify-center ">
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
              <Label htmlFor="description" value="Fecha de Entrega" />
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
              <Label htmlFor="title" value="Porcentaje del Quiz" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Ingresa el Porcentaje del Quiz"
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <QuestionForm />
          <Button type="submit">Editar Quiz</Button>
        </form>
      </div>
    </>
  );
};

export default EditQuiz;
