import React, { useState, ChangeEvent } from "react";
import {
  Label,
  TextInput,
  Textarea,
  Button,
  Modal,
  Select,
} from "flowbite-react";
import TrueFalse from "./newBolean";
import OpenQuestionForm from "./newOpenQuestion";
import ChoiceQuiestionForm from "./uniqueChoice/newUniqueChoice";
import MultipleChoiceQuiestionForm from "./multipleChoice/newMultipleChoice";

const QuestionForm = () => {
  //Vars on form
  const [selectedValue, setSelectedValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to back end
  };

  // handle the change of select
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Button color="blue" onClick={() => setOpenModal(true)}>
        Agrega Pregunta
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Porcentaje de la Pregunta" />
              </div>
              <TextInput
                id="title"
                type="text"
                placeholder="Ingresa el porcentaje de la Pregunta"
                required={true}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label
                  htmlFor="typeAsk"
                  value="Selecciona el tipo de pregunta"
                />
              </div>
              <Select
                id="typeAsk"
                value={selectedValue}
                onChange={handleChange}
                required
              >
                <option>Respuesta Multiple</option>
                <option>Verdadero/Falso</option>
                <option>Pregunta Abierta</option>
                <option>Respuesta Unica</option>
              </Select>
            </div>
            <div>
              {selectedValue == "Respuesta Multiple" && (
                <MultipleChoiceQuiestionForm />
              )}
              {selectedValue == "Verdadero/Falso" && <TrueFalse />}
              {selectedValue == "Pregunta Abierta" && <OpenQuestionForm />}
              {selectedValue == "Respuesta Unica" && <ChoiceQuiestionForm />}
            </div>
            <Button type="submit">Crear Pregunta</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuestionForm;
