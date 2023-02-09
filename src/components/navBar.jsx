import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Apresentação",
    },
    {
      id: 2,
      link: "Sobre",
    },
    {
      id: 3,
      link: "Projetos",
    },
    {
      id: 4,
      link: "Experiência",
    },
    {
      id: 5,
      link: "Contato",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-12 px-10 text-white bg-stone-800/50 backdrop-blur fixed
    drop-shadow-[0px_7px_5px_rgba(8,145,178,0.1)]">
      <div>
        <Link to="Apresentação" smooth duration={500}>
          <h1 className="text-3xl text-slate-300 font-signature cursor-pointer hover:text-sky-400 hover:scale-110 duration-200">Obrigado pela visita !</h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-slate-300 hover:scale-110 hover:text-sky-400 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;