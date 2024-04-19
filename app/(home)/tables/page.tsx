import Breadcrumb from "@/app/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/app/components/Tables/TableThree";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </>
  );
};

export default TablesPage;
