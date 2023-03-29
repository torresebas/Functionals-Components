import {  useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px 0;
`;

// Custom Hooks
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial); // useState({},[], bool ...)
  const incrementar = () => {
    setContador(contador + 1);
  };
  const reset = () => {
    setContador(0);
  };
  return [contador, incrementar, reset];
};

const CustomHooks = () => {
  const [contador, incrementar, reset] = useContador(0)

  return (
    <Container>
      <h1>this is a Custom Hook</h1>
      <div>
        Contador : {contador}
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={reset}>Reset</button>
      </div>
    </Container>
  );
};

export default CustomHooks;

// PODRIA SER UN  LLAMADO A UNA API