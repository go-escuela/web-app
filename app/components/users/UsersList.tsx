"use client";

import { Table, Avatar } from "flowbite-react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const UsersList = () => {
  const [users] = useState([
    {
      photo: faker.image.avatar(),
      name: "John Doe",
      userType: "Admin",
      id: "12345",
      email: "johndoe@example.com",
    },
    {
      photo: faker.image.avatar(),
      name: "Jane Smith",
      userType: "Estudiante",
      id: "67890",
      email: "janesmith@example.com",
    },
    {
      photo: faker.image.avatar(),
      name: "Alice Johnson",
      userType: "Profesor",
      id: "54321",
      email: "alicejohnson@example.com",
    },
  ]);

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Foto</Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Tipo Usuario</Table.HeadCell>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Correo</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users.map((user, index) => (
            <Table.Row
              key={index}
              className="dark:border-gray-700 dark:bg-gray-800 bg-white"
            >
              <Table.Cell>
                <Avatar
                  img={user.photo}
                  alt={`${user.name} image`}
                  rounded
                  size="sm"
                />
              </Table.Cell>
              <Table.Cell className="text-gray-900 whitespace-nowrap font-medium dark:text-white">
                {user.name}
              </Table.Cell>
              <Table.Cell>{user.userType}</Table.Cell>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UsersList;
