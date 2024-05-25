"use client";

import React, { useState } from "react";
import { Button, FileInput } from "flowbite-react";

const ActivityView = () => {
  const [isDelivered, setIsDelivered] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Datos de ejemplo de la actividad
  const activity = {
    title: "Actividad de Matemáticas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: "2024-06-01", // Fecha en formato YYYY-MM-DD
  };

  const handleDelivery = () => {
    setIsDelivered(true);
    // Aquí puedes agregar la lógica para marcar la actividad como entregada en el backend
    console.log("Actividad entregada con el archivo:", selectedFile);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-start justify-center p-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg lg:w-2/4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{activity.title}</h1>
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-700">Descripción de la Actividad</h2>
          <p className="mt-2 text-gray-600">{activity.description}</p>
        </div>
        <div>
          <h3 className="text-base font-medium text-gray-700">Fecha de Entrega</h3>
          <p className="mt-2 text-gray-600">{new Date(activity.dueDate).toLocaleDateString()}</p>
        </div>
        <div>
          <FileInput
            onChange={handleFileChange}
            className="mt-2"
          />
        </div>
        <Button
          onClick={handleDelivery}
          disabled={isDelivered}
          className={`mt-4 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
            isDelivered ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 focus:ring-blue-500"
          }`}
        >
          {isDelivered ? "Actividad Entregada" : "Entregar Actividad"}
        </Button>
      </div>
    </div>
  );
};

export default ActivityView;
