"use client";

import { Button } from "flowbite-react";
import React, { useState } from "react";

const ActivityView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fechaEntrega, setDueDate] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to backend
  };

  return (
    <>
      <h1 className="text-gray-800 mb-4 text-center text-4xl font-bold dark:text-white">
        Lorem ipsum
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-3">
        {description}
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </p>
      <Button className="w-full place-content-center">Entrega Actividad</Button>
      {fechaEntrega}
    </>
  );
};

export default ActivityView;
