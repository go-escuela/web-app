import React, { useState, ReactNode } from "react";
import { Button, Modal } from "flowbite-react";
import { FiEdit3, FiCheckSquare, FiRadio, FiAlertCircle } from "react-icons/fi";
import NewOpenQuestion from "./NewOpenQuestion";
import NewMultipleChoiceQuestion from "./multipleChoiceQuestions/NewMultipleChoiceQuestion";
import NewBooleanQuestion from "./NewBooleanQuestion";
import NewSingleChoiceQuestion from "./uniqueChoiceQuestions/NewSingleChoiceQuestion";

interface NewQuestionProps {
  addComponent: (component: ReactNode) => void;
}

const NewQuestion: React.FC<NewQuestionProps> = ({ addComponent }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleButtonClick = (component: ReactNode) => {
    addComponent(component);
    setOpenModal(false);
  };

  return (
    <>
      <Button color="blue" onClick={() => setOpenModal(true)}>
        Crear Pregunta
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup={true}
        onClose={() => {
          setOpenModal(false);
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      >
        <Modal.Header>
          <h3 className="text-gray-900 text-xl font-semibold">
            Selecciona tipo de pregunta a Crear
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4 p-8">
            <Button
              color="light"
              className=""
              onClick={() => handleButtonClick(<NewOpenQuestion />)}
            >
              <FiEdit3 className="text-xl" />
              Pregunta Abierta
            </Button>
            <Button
              color="light"
              className=""
              onClick={() => handleButtonClick(<NewMultipleChoiceQuestion />)}
            >
              <FiCheckSquare className="text-xl" />
              Pregunta con Respuesta Múltiple
            </Button>
            <Button
              color="light"
              className=""
              onClick={() => handleButtonClick(<NewSingleChoiceQuestion />)}
            >
              <FiRadio className="text-xl" />
              Pregunta de Única Respuesta
            </Button>
            <Button
              color="light"
              className=""
              onClick={() => handleButtonClick(<NewBooleanQuestion />)}
            >
              <FiAlertCircle className="text-xl" />
              Pregunta de Verdadero/Falso
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewQuestion;
