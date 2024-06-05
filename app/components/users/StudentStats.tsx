import { Table } from "flowbite-react";
import React from "react";
import { faker } from "@faker-js/faker";

const StudentStats = () => {
  const students = [
    {
      photo: faker.image.avatar(),
      name: faker.person.fullName(),
      id: "12345",
      email: "johndoe@example.com",
      grade: "A",
      notaAcomulada: "95",
      progress: "80%",
      activities: [80, 90, 85], // Notas para cada actividad
    },
    {
      photo: faker.image.avatar(),
      name: faker.person.fullName(),
      id: "67890",
      email: "janesmith@example.com",
      grade: "B",
      notaAcomulada: "85",
      progress: "70%",
      activities: [75, 85, 80], // Notas para cada actividad
    },
    {
      photo: faker.image.avatar(),
      name: faker.person.fullName(),
      id: "54321",
      email: "alicejohnson@example.com",
      grade: "A",
      notaAcomulada: "90",
      progress: "85%",
      activities: [85, 80, 90], // Notas para cada actividad
    },
  ];

  const activities = ["Actividad 1", "Actividad 2", "Actividad 3"];

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Nombre</Table.HeadCell>
          {activities.map((activity, index) => (
            <Table.HeadCell key={index}>{activity}</Table.HeadCell>
          ))}
          <Table.HeadCell>Progreso</Table.HeadCell>
          <Table.HeadCell>Nota Acumulada</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {students.map((student, index) => (
            <Table.Row
              key={index}
              className="dark:border-gray-700 dark:bg-gray-800 bg-white"
            >
              <Table.Cell className="flex items-center">
                <img
                  src={student.photo}
                  alt="Avatar"
                  className="mr-2 h-10 w-10 rounded-full"
                />
                <span className="text-gray-900 whitespace-nowrap font-medium dark:text-white">
                  {student.name}
                </span>
              </Table.Cell>
              {student.activities.map((nota, index) => (
                <Table.Cell key={index}>{nota}</Table.Cell>
              ))}
              <Table.Cell>{student.progress}</Table.Cell>
              <Table.Cell>{student.notaAcomulada}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentStats;
