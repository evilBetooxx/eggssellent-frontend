"use client"
import React, { useState } from "react";

interface Egg {
  nombre: string;
  descripcion: string;
  especie: string;
  fechaIncubacion: string;
  fechaEclosion: string;
}

const eggsPerPage = 3;

function ProfileComponent() {
  const [page, setPage] = useState(0);

  const eggHistory: Egg[] = [
    {
      nombre: "Huevo 1",
      descripcion: "Huevo de ave 1",
      especie: "Ave 1",
      fechaIncubacion: "01/01/2023",
      fechaEclosion: "15/01/2023",
    },
    {
      nombre: "Huevo 2",
      descripcion: "Huevo de ave 2",
      especie: "Ave 2",
      fechaIncubacion: "05/02/2023",
      fechaEclosion: "20/02/2023",
    },
    {
      nombre: "Huevo 3",
      descripcion: "Huevo de reptil 1",
      especie: "Reptil 1",
      fechaIncubacion: "10/03/2023",
      fechaEclosion: "25/03/2023",
    },
    {
      nombre: "Huevo 4",
      descripcion: "Huevo de reptil 2",
      especie: "Reptil 2",
      fechaIncubacion: "15/04/2023",
      fechaEclosion: "30/04/2023",
    },
    {
      nombre: "Huevo 5",
      descripcion: "Huevo de reptil 2",
      especie: "Reptil 2",
      fechaIncubacion: "15/04/2023",
      fechaEclosion: "30/04/2023",
    },
    {
      nombre: "Huevo 4",
      descripcion: "Huevo de reptil 2",
      especie: "Reptil 2",
      fechaIncubacion: "15/04/2023",
      fechaEclosion: "30/04/2023",
    },
    
  ];

  const totalPages = Math.ceil(eggHistory.length / eggsPerPage);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startIndex = page * eggsPerPage;
  const endIndex = startIndex + eggsPerPage;
  const slicedEggHistory = eggHistory.slice(startIndex, endIndex);

  return (
    <div
      className="min-h-screen flex justify-center items-start relative"
      style={{
        backgroundImage: `url("/fonditorico.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 p-4 text-white text-4xl">
        Eggssellent
      </div>
      <div className="bg-transparent max-w-7xl w-full p-8 rounded-lg shadow-lg relative mt-20 flex items-start justify-between bg-opacity-20">
        <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src="/kanye.jpg" alt="Foto de perfil" className="w-32 h-32 rounded-full" />
          <div className="text-white mt-4">Arturito de la web</div>
          <div className="bg-black bg-opacity-10 rounded-lg p-4 mt-4">
          <p className="text-white">Huevos colocados: 10</p>
            <p className="text-white">Huevos eclosionados: 5</p>
            <p className="text-white">Especies: Nisayos</p>
            <p className="text-white">Especies favoritas: Nisayo</p>
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="text-white text-2xl mb-4 bg-cyan-400 rounded-lg p-4 text-center">Historial de Huevos</h2>
          {slicedEggHistory.map((egg, index) => (
            <div key={index} className="bg-black bg-opacity-10 rounded-lg p-4 mb-4 flex items-center justify-start">
              <div className="flex-1">
                <p className="text-white">Nombre: {egg.nombre}</p>
                <p className="text-white">Descripción: {egg.descripcion}</p>
                <p className="text-white">Especie: {egg.especie}</p>
                <p className="text-white">Fecha de incubación: {egg.fechaIncubacion}</p>
                <p className="text-white">Fecha de eclosión: {egg.fechaEclosion}</p>
              </div>
              <img src="/pollo.png" alt="" className="w-20 h-20 ml-4" />
            </div>
          ))}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                onClick={handlePrevPage}
                disabled={page === 0}
              >
                {"<"}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                onClick={handleNextPage}
                disabled={page === totalPages - 1}
              >
                {">"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;