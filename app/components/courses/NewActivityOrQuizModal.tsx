import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { FiEdit3, FiCheckSquare } from "react-icons/fi";
import { HiOutlinePlusSm } from "react-icons/hi";

const NewActivityOrQuizModal: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  // Define the type of option as a union of string literals
  const handleButtonClick = (option: "quiz" | "activity") => {
    setOpenModal(false);
    // Redirect to the corresponding page based on the selected option
    if (option === "quiz") {
      window.location.href = "/quiz/new"; // Replace "/create-quiz" with the route to your quiz creation page
    } else if (option === "activity") {
      window.location.href = "/activity/new"; // Replace "/create-activity" with the route to your activity creation page
    }
  };

  return (
    <>
      {/* Button to open the modal */}
      <Button
        onClick={() => setOpenModal(true)}
        fullSized
        size={"sm"}
        gradientDuoTone={"cyanToBlue"}
      >
        <HiOutlinePlusSm className="ml-2 h-5 w-5" />
        Agregar Actividad o recurso
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
            Selecciona que quieres Crear
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4 p-8">
            {/* Button to create a quiz */}
            <Button
              color="light"
              className="flex items-center gap-2"
              onClick={() => handleButtonClick("quiz")}
            >
              <FiEdit3 className="text-xl" />
              Crear Quiz
            </Button>
            {/* Button to create an activity */}
            <Button
              color="light"
              className="flex items-center gap-2"
              onClick={() => handleButtonClick("activity")}
            >
              <FiCheckSquare className="text-xl" />
              Crear Actividad
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewActivityOrQuizModal;
