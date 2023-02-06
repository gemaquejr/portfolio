import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="Sobre"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Sobre
          </p>
        </div>

        <p className="text-xl mt-5 lg:mt-20">
          <span className=" font-bold">Olá,</span> me chamo <span className=" font-bold">Francisco Espíndola Gemaque Junior.</span>
        </p>
          <br></br>
        <p className="text-x lg:text-xl">Um desenvolvedor web fullstack formado pela Trybe, atualmente morando em São Paulo, Brasil.
          <br></br>
          <br></br>
          Sou um apaixonado por tecnologia e por tudo o que ela pode fazer para melhorar as nossas vidas.
          <br></br>
          Sou bem esforçado e todos os dias divido o meu tempo entre a minha família e a contínua rotina de aprender e melhorar as habilidades em desenvolvimento web.
          <br></br>
          <br></br>
          Ansioso para aprender e colaborar com os melhores profissionais neste campo!
        </p>
        <br></br>
        <div className="lg:flex gap-32">
          <p>Nome: Francisco Espindola Gemaque Junior
            <br></br>
            <br></br>
            Nascimento: 31 de Agosto de 1981
            <br></br>
            <br></br>
            Graduação: Desenvolvimento Web e Engenharia agronômica
          </p>
          <br></br>
          <p>
            Endereço: São Paulo, SP, Brasil.
            <br></br>
            <br></br>
            Email: gemaquejr@hotmail.com
            <br></br>
            <br></br>
            Celular\whatsapp: (11) 949523526
          </p>
          <br></br>
        </div>
        <br></br>
        <Link to="Contato" smooth duration={500} className="bg-gradient-to-r
                from-cyan-500 to-blue-500 w-fit px-10 py-3 rounded-md cursor-pointer">Contato</Link>
      </div>
    </div>
  );
};

export default About;