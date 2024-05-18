import React, { useState } from "react";
import { Label, TextInput, Textarea, Button, Modal } from "flowbite-react";

const TopicForm = () => {
  //Vars on form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to back end
    console.log("Título:", title);
    console.log("Descripción:", description);
  };

  return (
    <>
      <Button color="blue" onClick={() => setOpenModal(true)}>
        Agrega Topico
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <TextInput
                id="title"
                type="text"
                placeholder="Ingresa el título del tema"
                required={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <Button type="submit">Crear tema</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopicForm;
