import React from "react";

function MainComponent() {
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
      <div className="bg-transparent max-w-7xl w-full p-8 rounded-lg shadow-lg relative mt-20">
        <h1 className="text-4xl font-bold text-white">¡HOLA!</h1>
        <h1 className="text-white text-2xl mb-4">
          Bienvenido a Eggssellent, primero comenzemos a conocer la especie de
          nuestros nuevos habitantes! <i></i>
        </h1>
        <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
        <div className="grid grid-cols-4 gap-4 text-white z-10">
          <div className="bg-black bg-opacity-10 rounded-lg p-4 h-auto">
            <h2 className="font-semibold text-3xl">Pollito</h2>
            <p className="text-sm">
              Tiempo de incubación:
              <span className="font-bold">20-25 días</span>
            </p>
            <br />
            <p className="text-sm">
              Los huevos de gallina requieren un nivel moderado de cuidado
              durante la incubación. Es importante mantener una temperatura y
              humedad constantes en la incubadora, voltear los huevos
              regularmente y monitorear su desarrollo para mantener una eclosión
              exitosa.
            </p>
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/pollo.png" alt="Pollito" className="mt-[-10] w-1/2 float-right" />
          </div>
          <div className="bg-black bg-opacity-10 rounded-lg p-4 h-auto">
            <h2 className="text-3xl font-semibold">Iguana</h2>
            <p className="text-sm">
              Tiempo de incubación:
              <span className="font-bold">70-90 días</span>
            </p>
            <br />
            <p className="text-sm">
              Los huevos de iguana necesitan un nivel más alto de cuidado
              durante la incubación. Requieren condiciones específicas de
              temperatura y humedad, así como una ventilación adecuada.
              Es importante evitar
              movimientos bruscos para garantizar un desarrollo adecuado.
            </p>
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/iguana.png" alt="Pollito" className="mt-[-10] w-1/2 float-right" />
          </div>
          <div className="bg-black bg-opacity-10 rounded-lg p-4 h-auto">
            <h2 className="text-3xl font-semibold">Pato</h2>
            <p className="text-sm">
              Tiempo de incubación:
              <span className="font-bold">25-28 días</span>
            </p>
            <br />
            <p className="text-sm">
              Los huevos de pato requieren un nivel moderado de cuidado durante
              la incubación. Es esencial mantener una temperatura y humedad
              estables en la incubadora, voltear los huevos regularmente y estar
              atento a cualquier signo de problemas durante el proceso de
              incubación.
            </p>
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/pato.png" alt="Pollito" className="mt-[-10] w-1/2 float-right" />
          </div>
          <div className="bg-black bg-opacity-10 rounded-lg p-4 h-auto">
            <h2 className="text-3xl font-semibold">Tortuga</h2>
            <p className="text-sm">
              Tiempo de incubación:
              <span className="font-bold">60-120 días</span>
            </p>
            <br />
            <p className="text-sm">
              Los huevos de tortuga necesitan un nivel más alto de cuidado
              durante la incubación debido a su sensibilidad a los cambios
              ambientales. Se requiere una temperatura y humedad precisas 
              para evitar problemas como la
              deshidratación de los huevos o el desarrollo anormal de los
              embriones.
            </p>
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/star.png" alt="Pollito" className="mt-8 w-1/6 float-left " />
            <img src="/tortuga.png" alt="Pollito" className="mt-[-10] w-1/2 float-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
