"use client";

import { Table, Avatar } from "flowbite-react";
import React, { useState } from "react";

const UsersList = () => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // set send to backend
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Tipo Usuario</Table.HeadCell>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Correo</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="dark:border-gray-700 dark:bg-gray-800 bg-white">
            <Table.Cell>
              <Avatar img={photo} alt="Neil image" rounded size="sm" />
            </Table.Cell>
            <Table.Cell className="text-gray-900 whitespace-nowrap font-medium dark:text-white">
              {name}
            </Table.Cell>
            <Table.Cell>{userType}</Table.Cell>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="dark:border-gray-700 dark:bg-gray-800 bg-white">
            <Table.Cell>
              <Avatar img={photo} alt="Neil image" rounded size="sm" />
            </Table.Cell>
            <Table.Cell className="text-gray-900 whitespace-nowrap font-medium dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="dark:border-gray-700 dark:bg-gray-800 bg-white">
            <Table.Cell>
              <Avatar img={photo} alt="Neil image" rounded size="sm" />
            </Table.Cell>
            <Table.Cell className="text-gray-900 whitespace-nowrap font-medium dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default UsersList;
