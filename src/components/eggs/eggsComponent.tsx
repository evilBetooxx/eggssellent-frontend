function EggsComponent() {

  const chickenInfoList = [
    {
      "Nombre": "Arturito",
      "Día de incubación:": "05-03-2024",
      "Fecha estimada de nacimiento:": "30-05-2024",
      "Notas:": "Este es un huevito que puso con mucho cariño Arturito de la web"
    },
    {
      "Nombre": "Pollito",
      "Día de incubación:": "15-02-2024",
      "Fecha estimada de nacimiento:": "10-04-2024",
      "Notas:": "Este es un pollito muy saludable y activo."
    },
    {
      "Nombre": "Pollito",
      "Día de incubación:": "15-02-2024",
      "Fecha estimada de nacimiento:": "10-04-2024",
      "Notas:": "Este es un pollito muy saludable y activo."
    },
    {
      "Nombre": "Pollito",
      "Día de incubación:": "15-02-2024",
      "Fecha estimada de nacimiento:": "10-04-2024",
      "Notas:": "Este es un pollito muy saludable y activo."
    },
  ];

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
      
      <div className="bg-transparent max-w-7xl w-full p-8 rounded-lg shadow-lg relative mt-20 flex items-center justify-between bg-opacity-20">
        <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
        {/* <h1 className="text-2xl text-white">Incubadora Egg v1.5</h1> */}
        <img src="/incubadora.png" alt="Incubadora" className="w-1/4" />
        <div className="flex flex-col justify-between w-3/4">
          <div className="grid grid-cols-2 gap-4">
            {chickenInfoList.map((chickenInfo, index) => (
              <div key={index} className="bg-black bg-opacity-10 rounded-lg p-4 h-auto mb-4">
                <div className="text-white text-lg">
                  {Object.entries(chickenInfo).map(([label, value], index) => (
                    <p key={index} className="mb-2">
                      <span className="font-bold">{label}</span>: {value}
                    </p>
                    
                  ))}
                </div>
                <img src="/pollo.png" alt="Pollo" className="w-20 h-20 mb-4 float-right" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EggsComponent;