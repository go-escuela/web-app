"use client"

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { customTabTheme } from "@/app/lib/custom/tabs";
import { ActivityList } from "@/app/components/courses/ActivityList";
import UsersList from "@/app/components/users/UsersList";
import StudentStats from "@/app/components/users/StudentStats";
import { useSearchParams } from 'next/navigation';

export default function Page() {

  return (
    <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 gap-5 border-stroke dark:border-strokedark sm:gap-10">
        <Tabs
          aria-label="Default tabs"
          style="underline"
          className="bg-red-500 hover:bg-red-600"
          theme={customTabTheme}
        >
          <Tabs.Item active title="Actividades de clase" icon={HiUserCircle}>
            <ActivityList/>
          </Tabs.Item>
          <Tabs.Item title="Personas" icon={MdDashboard}>
            <UsersList />
          </Tabs.Item>
          <Tabs.Item title="Calificaciones" icon={HiAdjustments}>
            <StudentStats />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}