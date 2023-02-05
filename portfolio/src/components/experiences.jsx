import React from "react";
import html from "../assets/experiences/html.png";
import css from "../assets/experiences/css.png";
import javascript from "../assets/experiences/javascript.png";
import react from "../assets/experiences/react.png";
import github from "../assets/experiences/github.png";
import tailwind from "../assets/experiences/tailwind.png";
import node from "../assets/experiences/node.png";
import git from "../assets/experiences/git.png";
import vscode from "../assets/experiences/vscode.png";

const Experiences = () => {
  const techs = [
    {
      id: 1,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: vscode,
      title: "VS Code",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="Experiência"
      className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiência
          </p>
          <p className="py-6">Atualmente estou trabalhando como freelance e<br></br> estou disponível para serviços de desenvolvimento web</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;