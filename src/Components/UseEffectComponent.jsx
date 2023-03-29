import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px 0;
`;

//* useEffect
// Algo que genere un efecto lateral: Actualizar el DOM, leer en DB, escribir en DB, conectarnos a ua API
// Cada vez que queramos efectuar algo que cambie el resultado de nuestro componente
// debe ir dentro del useEfect

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

const UseEffectComponent = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    // console.log('I am a effect')
    document.title = contador;
  }, [contador]); 
  // Remover contador del [], para ver la diferencia,
  // es decir cada ves que cambia contador(dependencia) se ejecutaa console.log('I am a effect')
  // nota: si queremos que se ejecute la funcion de useEffect siempre, NO le pasamos [], una vez = [] , cambie el estado[dependencia]
  return (
    <Container>
      <h1>UseEffect</h1>
      <div>
        Contador : {contador}
        <button onClick={incrementar}>Incrementar</button>
      </div>
    </Container>
  );
};

export default UseEffectComponent;


