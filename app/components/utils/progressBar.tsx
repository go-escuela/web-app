"use client";

import { Progress } from "flowbite-react";

const ProgressBar = () => {
  return (
    <Progress
      progress={45}
      progressLabelPosition="inside"
      textLabel="Progreso Tarea"
      textLabelPosition="outside"
      size="lg"
      labelProgress
      labelText
    />
  );
};

export default ProgressBar;
