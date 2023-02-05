import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="Sobre"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="lg:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <p className="text-xl mt-5 lg:mt-20">
          <span className=" font-bold">Olá,</span> Meu nome é <span className=" font-bold">Francisco Gemaque.</span>
        </p>
        <p className="text-x lg:text-xl">Um desenvolvedor web fullstack formado pela Trybe👨‍💻 atualmente morando em São Paulo, Brasil.
          <br></br>
          <br></br>
          Sou apaixonado por tecnologia e as maravilhas que ela pode fazer para melhorar as nossas vidas.
          <br></br>
          Constantemente aprendendo e melhorando as habilidades de desenvolvimento web.
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
        <Link to="contact" smooth duration={500} className=" bg-cyan-600 w-fit px-10 py-3 rounded-md cursor-pointer">Contato</Link>
      </div>
    </div>
  );
};

export default About;