"use client";
import "flatpickr/dist/flatpickr.min.css";
import "@/app/css/style.css";
import React, { useEffect, useState, ReactNode } from "react";
import Loader from "@/app/components/common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
