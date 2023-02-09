import React from "react";
import html from "../assets/experiences/html.png";
import css from "../assets/experiences/css.png";
import tailwind from "../assets/experiences/tailwind.png";
import javascript from "../assets/experiences/javascript.png";
import typescript from "../assets/experiences/typescript.png";
import react from "../assets/experiences/react.png";
import redux from "../assets/experiences/redux.png";
import node from "../assets/experiences/node.png";
import docker from "../assets/experiences/docker.png";
import mysql from "../assets/experiences/mysql.png";
import mongodb from "../assets/experiences/mongodb.png";
import jest from "../assets/experiences/jest.png";
import git from "../assets/experiences/git.png";
import github from "../assets/experiences/github.png";
import vscode from "../assets/experiences/vscode.png";
import trello from "../assets/experiences/trello.png";

const Experiences = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: node,
      title: "Node.js",
      style: "shadow-emerald-500",
    },
    {
      id: 9,
      src: docker,
      title: "Docker",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: mysql,
      title: "MYSQL",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: jest,
      title: "Jest",
      style: "shadow-pink-500",
    },
    {
      id: 13,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 15,
      src: vscode,
      title: "VS Code",
      style: "shadow-sky-500",
    },
    {
      id: 16,
      src: trello,
      title: "Trello",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="Experiência"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiência
          </p>
          <p className="py-6">Atualmente estou trabalhando como freelance e<br></br> estou disponível para serviços de desenvolvimento web</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-8 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;