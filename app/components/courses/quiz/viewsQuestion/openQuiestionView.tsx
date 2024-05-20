"use client";

import React, { useState } from "react";
import { TextInput } from "flowbite-react";

interface Option {
  id: number;
  label: string;
}

const OpenQuestion = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-gray-800 mb-4 text-xl font-bold">
        Pregunta de Abierta, cuantos años tenia matusalen?
      </h3>
      <TextInput type="text" id="disabledInput1" placeholder="Responde aqui" />
      <div className="space-y-4"></div>
    </div>
  );
};

export default OpenQuestion;
