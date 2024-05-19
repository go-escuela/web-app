"use client";

import { Table } from "flowbite-react";
import React, { useState } from "react";

const StudentList = () => {
  const [students] = useState([
    {
      photo: "https://via.placeholder.com/50",
      name: "John Doe",
      id: "12345",
      email: "johndoe@example.com",
      grade: "A",
      notaAcomulada: "95",
      progress: "80%",
    },
    {
      photo: "https://via.placeholder.com/50",
      name: "Jane Smith",
      id: "67890",
      email: "janesmith@example.com",
      grade: "B",
      notaAcomulada: "85",
      progress: "70%",
    },
    {
      photo: "https://via.placeholder.com/50",
      name: "Alice Johnson",
      id: "54321",
      email: "alicejohnson@example.com",
      grade: "A",
      notaAcomulada: "90",
      progress: "85%",
    },
  ]);

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Grado</Table.HeadCell>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Correo</Table.HeadCell>
          <Table.HeadCell>Progreso</Table.HeadCell>
          <Table.HeadCell>Nota Acomulada</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {students.map((student, index) => (
            <Table.Row
              key={index}
              className="dark:border-gray-700 dark:bg-gray-800 bg-white"
            >
              <Table.Cell className="text-gray-900 whitespace-nowrap font-medium dark:text-white">
                {student.name}
              </Table.Cell>
              <Table.Cell>{student.grade}</Table.Cell>
              <Table.Cell>{student.id}</Table.Cell>
              <Table.Cell>{student.email}</Table.Cell>
              <Table.Cell>{student.progress}</Table.Cell>
              <Table.Cell>{student.notaAcomulada}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentList;
