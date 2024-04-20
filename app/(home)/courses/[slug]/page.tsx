"use client"

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function Page() {
  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex flex-wrap gap-5 border-stroke dark:border-strokedark sm:gap-10">
        <Tabs aria-label="Default tabs" style="underline">
          <Tabs.Item active title="Actividades de clase" icon={HiUserCircle}>
            Actividades en clase
          </Tabs.Item>
          <Tabs.Item title="Personas" icon={MdDashboard}>
            Personas
          </Tabs.Item>
          <Tabs.Item title="Calificaciones" icon={HiAdjustments}>
            Calificaciones
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}