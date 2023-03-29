import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px 0;
  .comp {
    border: 1px solid #eee;
    padding: 30px;
    margin: 10px 0;
  }
`;

//* Hook: useContador
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};

//* Interval Component
const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log(contador, "<-- Intervalo");
    }, 1000);

    return () => clearInterval(i); //<- funcion de desuscribir
  }, [contador]);

  return (
    <div>
      <p>Interval: se esta ejecutando cada segundo </p>
      <p>Se usa en web sockets</p>
      <span>{contador}</span>
    </div>
  );
};

//Component
const DesuscribirUseEffect = () => {
  const [contador, incrementar] = useContador(0);

  return (
    <Container>
      <div className="comp">
        <h1>UseEffect: desuscribir a un efecto - eg. clearInterval</h1>
        <p>Efecto borde</p>
        <div>
          Contador : {contador}
          <button onClick={incrementar}>Incrementar</button>
        </div>
      </div>

      <div className="comp">
        <Interval contador={contador} />
      </div>
    </Container>
  );
};

export default DesuscribirUseEffect;

// Se usa cuando llega info constanstemente = webSocket,
// hay que desuscribirse para que no llegue info una y otra vez.
