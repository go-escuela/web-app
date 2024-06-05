"use client";

import { Label, TextInput, Textarea, Button, FileInput } from "flowbite-react";
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";

interface TaskStatsProps {
  title: string;
}

const NewActivity = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to backend
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-start justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg lg:w-2/4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Título de la Actividad" />
          </div>
          <TextInput
            id="title"
            type="text"
            placeholder="Ingresa el título de la Actividad"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Descripción de la Actividad" />
          </div>
          <Textarea
            id="description"
            placeholder="Ingresa una descripción para la Actividad"
            required={true}
            rows={4}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Subir Archivo" />
          </div>
          <FileInput id="file-upload" />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="dueDate" value="Fecha de Entrega" />
          </div>
          <Datepicker autoHide={true} minDate={new Date()} showClearButton={false} labelTodayButton={"Hoy"} language={"es"} />
        </div>
        <Button type="submit">Crear Actividad</Button>
      </form>
    </div>
  );
};

export default NewActivity;
