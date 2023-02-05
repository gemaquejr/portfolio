import React from "react";
import nhl2021 from "../assets/projects/nhl2021.png";
import solarSystem from "../assets/projects/sistemaSolar.png";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "Credential Gemaquejr",
      src: nhl2021,
      hrefLive: "https://credential-gemaquejr.netlify.app/",
      hrefCode: "https://github.com/gemaquejr/nhl-2021",
    },
    {
      id: 2,
      name: "Solar System",
      src: solarSystem,
      hrefCode: "https://github.com/gemaquejr/Solar-System",
    },
  ];

  return (
    <div
      name="Projetos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Alguns dos meus trabalhos aqui</p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefLive, hrefCode }) => (
            <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">
              <div className="">
              <img
                src={src}
                alt=""
                className="rounded-t-md "
              />
              <p className="bg-gray-900  font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefLive} target="_blank" rel="noreferrer">Site</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                <a href={hrefCode} target="_blank" rel="noreferrer">Github</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;