import React from "react";

const Home = () => {
  return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-500 text-2xl py-4 max-w-md">Olá, Eu sou</p>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              FRANCISCO
            </h2>
            <h2 className="text-4xl sm:text-7xl  text-white">
              GEMAQUE
            </h2>
            <p className="text-gray-500 text-lg py-4 max-w-md md:text-2xl">DESENVOLVEDOR WEB FULLSTACK PYTHON 👨‍💻</p>
          </div>
        </div>
      </div>
  );
};

export default Home;