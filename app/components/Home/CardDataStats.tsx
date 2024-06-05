import React, { ReactNode } from "react";
import Link from "next/link";
import { slugify } from "@/app/lib/utils";

interface CardDataStatsProps {
  title: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, children }) => {
  return (
    <Link href={`courses/${slugify(title)}`}>
      <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex size-11.5 items-center justify-center rounded-full dark:bg-meta-4">
          {children}
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md text-black dark:text-white">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDataStats;
