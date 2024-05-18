"use client";

import { Accordion } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlinePlusSm } from "react-icons/hi";
import {
  QuestionMarkCircleIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/solid";
import { List } from "flowbite-react";
import Link from "next/link";
import TaskForm from "../activities/newActivity";
import TopicForm from "../topic/newTopic";

export function ActivityList() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap items-start gap-2">
        <TopicForm />
      </div>

      <Accordion flush={true} arrowIcon={HiOutlinePlusSm} collapseAll>
        <Accordion.Panel>
          <Accordion.Title>General</Accordion.Title>
          <Accordion.Content>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              No hay actividades
            </p>
            <div className="p-4">
              <Link href="/activities/new" passHref>
                <Button className="w-full bg-[#06b6d4]" type="submit">
                  Crear Actividad
                </Button>
              </Link>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Clase 1</Accordion.Title>
          <Accordion.Content>
            <List unstyled className="divide-gray-200 dark:divide-gray-700">
              <List.Item className="border-b pb-3 sm:pb-4">
                <Link className="text-xs" href="/">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <BookmarkSquareIcon className="size-4 text-blue-500" />
                    <div className="min-w-0 flex-1">los seres vivos</div>
                    <div className="text-gray-900 inline-flex items-center text-xs dark:text-white">
                      Publicado 21 abril
                    </div>
                  </div>
                </Link>
              </List.Item>
              <List.Item className="border-b pb-3 sm:pb-4">
                <Link className="text-xs" href="/">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <QuestionMarkCircleIcon className="size-4 text-blue-500" />
                    <div className="min-w-0 flex-1">
                      Quiz de los seres vivos
                    </div>

                    <div className="text-gray-900 inline-flex items-center text-xs dark:text-white">
                      Publicado 21 abril
                    </div>
                  </div>
                </Link>
              </List.Item>
            </List>

            <div className="p-4">
              <Button fullSized size={"sm"} gradientDuoTone={"cyanToBlue"}>
                <HiOutlinePlusSm className="ml-2 h-5 w-5" />
                Agregar Actividad o recurso
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
