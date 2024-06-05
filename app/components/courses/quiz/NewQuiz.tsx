"use client";

import React, { useState, ReactNode } from "react";
import { Label, TextInput, Textarea, Button, Modal } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import NewQuestion from "./questions/newQuestions/NewQuestion";

const NewQuiz = () => {
  const [selectedComponents, setSelectedComponents] = useState<ReactNode[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [componentToRemove, setComponentToRemove] = useState<number | null>(
    null,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const addComponent = (component: ReactNode) => {
    setSelectedComponents((prevComponents) => [...prevComponents, component]);
  };

  const confirmRemoveComponent = () => {
    if (componentToRemove !== null) {
      setSelectedComponents((prevComponents) =>
        prevComponents.filter((_, i) => i !== componentToRemove),
      );
      setComponentToRemove(null);
    }
    setIsModalOpen(false);
  };

  const openModal = (index: number) => {
    setComponentToRemove(index);
    setIsModalOpen(true);
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
            <Datepicker autoHide={true} minDate={new Date()} showClearButton={false} labelTodayButton={"Hoy"} language={"es"} />
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
                  onClick={() => openModal(index)}
                >
                  X
                </Button>
                {Component}
              </div>
            ))}
          </div>
          <NewQuestion addComponent={addComponent} />
          <Button type="submit">Crear Quiz</Button>
        </form>
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-gray-800 mb-4 text-base font-bold">
              Confirmar Eliminación
            </h3>
            <p>¿Está seguro de que desea eliminar esta pregunta?</p>
            <div className="flex justify-center pt-4">
              <Button
                className="mr-3"
                color="gray"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button onClick={confirmRemoveComponent}>Eliminar</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewQuiz;
