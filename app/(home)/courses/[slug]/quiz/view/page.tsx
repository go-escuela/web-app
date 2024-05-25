"use client";

import { Button } from "flowbite-react";
import React, { useState } from "react";

const Page = () => {

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to backend
  };

  return (
    <>
      <h1 className="text-gray-800 mb-4 text-center text-4xl font-bold dark:text-white">
        Lorem QUIZ
      </h1>

      <Button className="w-full place-content-center">Entrega Examen</Button>
    </>
  );
};

