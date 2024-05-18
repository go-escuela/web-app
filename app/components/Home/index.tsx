"use client";
import React from "react";
import CardDataStats from "./CardDataStats";
import Image from "next/image";
import QuizForm from "../quiz/create/newQuiz";
import AddChoiceForm from "../quiz/questions/uniqueChoice/newChoice";
import UsersList from "../users/users";

const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Ciencias Naturales">
          <Image
            width={176}
            height={32}
            src={"/images/courses/natural_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="Matemáticas">
          <Image
            width={176}
            height={32}
            src={"/images/courses/math_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="Artes">
          <Image
            width={176}
            height={32}
            src={"/images/courses/art_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="Ingles">
          <Image
            width={176}
            height={32}
            src={"/images/courses/english_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="Lenguaje">
          <Image
            width={176}
            height={32}
            src={"/images/courses/lang_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="Religión">
          <Image
            width={176}
            height={32}
            src={"/images/courses/religion_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="Sociales">
          <Image
            width={176}
            height={32}
            src={"/images/courses/social_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>

        <CardDataStats title="tecnología">
          <Image
            width={176}
            height={32}
            src={"/images/courses/tech_icon.png"}
            alt="Logo"
            priority
          />
        </CardDataStats>
      </div>
    </>
  );
};

export default Home;
