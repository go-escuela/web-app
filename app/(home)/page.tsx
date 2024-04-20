import ECommerce from "@/app/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-escuela | Página principal",
  description: "",
};

export default function Home() {
  return (
    <ECommerce />
  );
}
