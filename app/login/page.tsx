import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: "Acceder | Go-escuela",
  description: "",
};

const SignIn: React.FC = () => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8">
        <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="no-scrollbar overflow-y-auto py-20">
            <div className="mx-auto w-full max-w-[480px]">
              <div className="text-center">
                <Link className="mb-5.5 inline-block" href="/">
                  <Image
                    className="dark:hidden"
                    src={"/images/logo/logo.png"}
                    alt="Logo"
                    width={176}
                    height={32}
                  />
                </Link>
                <div className="rounded-xl bg-white p-4 shadow-14 dark:bg-boxdark lg:p-7.5 xl:p-12.5">
                  <h1 className="mb-2.5 text-3xl font-black leading-[48px] text-black dark:text-white">
                    Acceder
                  </h1>
                  <form action={"/"}>
                    <div className="mb-4">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <span className="absolute right-4 top-4">
                          <EnvelopeIcon className="size-6" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Contraseña
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />

                        <span className="absolute right-4 top-4">
                          <LockClosedIcon className="size-6" />
                        </span>
                      </div>
                    </div>

                    <div className="mb-5">
                      <input
                        type="submit"
                        value="Acceder"
                        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-black/90"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
