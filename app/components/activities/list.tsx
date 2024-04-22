"use client";

import { Accordion } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { QuestionMarkCircleIcon, BookmarkSquareIcon } from '@heroicons/react/24/solid'
import { List, } from "flowbite-react";

export function ActivityList() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap gap-2 pb-4">
        <Button>
          <HiOutlinePlusSm className="ml-2 h-5 w-5" />
          Crear Tópico
        </Button>
      </div>

      <Accordion flush={true} arrowIcon={HiOutlinePlusSm}>
        <Accordion.Panel>
          <Accordion.Title>General</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              No hay actividades
            </p>
            <div className="p-4">
              <Button fullSized size={"sm"} gradientDuoTone={"cyanToBlue"} >
                <HiOutlinePlusSm className="ml-2 h-5 w-5" />
                Agregar Actividad o recurso
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Clase 1</Accordion.Title>
          <Accordion.Content>
            <List unstyled className="divide-gray-200 dark:divide-gray-700">
              <List.Item className="pb-3 sm:pb-4 border-b">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <BookmarkSquareIcon className="size-4 text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">los seres vivos</p>
                  </div>
                  <div className="text-xs inline-flex items-center text-gray-900 dark:text-white">Publicado 21 abril</div>
                </div>
              </List.Item>

              <List.Item className="pb-3 sm:pb-4 border-b">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <QuestionMarkCircleIcon className="size-4 text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">Quiz de los seres vivos</p>
                  </div>
                  <div className="text-xs inline-flex items-center text-gray-900 dark:text-white">Publicado 21 abril</div>
                </div>
              </List.Item>


            </List>

            <div className="p-4">
              <Button fullSized size={"sm"} gradientDuoTone={"cyanToBlue"} >
                <HiOutlinePlusSm className="ml-2 h-5 w-5" />
                Agregar Actividad o recurso
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div >
  );
}