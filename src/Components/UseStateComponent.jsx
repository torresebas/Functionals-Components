import { useState } from "react";

//? Reglas de los Hooks:
// No se llaman en loops (while, for, ...)
// Ubicarlo en lo mas alto de la funcion(componente)

// Solo se llaman en 2 partes
// * En componentes de react (no en funciones)
// * En Custom hooks
// note custom Hook use(...name..)

const UseStateComponent = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador : {contador}
      <button
        onClick={()=>{setContador(contador + 1)}}
      >
        Incrementar
      </button>
    </div>
  );
};

export default UseStateComponent;
