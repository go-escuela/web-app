"use client";
import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/app/components/Charts/ChartOne";
import ChartTwo from "@/app/components/Charts/ChartTwo";
import ChartThree from "@/app/components/Charts/ChartThree";
import React from "react";

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
