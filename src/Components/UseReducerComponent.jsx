import { useReducer, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px 0;
`;

// const state = { contador: 0 };
// const action = { type: "string", payload: any };  //type: string --- any: {}, string, bool ...
// const reducerFn = (acumulador, element) => {return newAcumulador} <-- //example reducefn

//* Define un estado (estructura de dato)
//* Acceder y actualizarlo.
const inicial = { contador: 0 };

//* Funcion reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return {
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        contador: state.contador - 1,
      };

    case "set":
      return {
        contador: action.payload,
      };
    default:
      return state;
  }
};

const UseReducerPrueba = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0);

  const handleChange = (e) => {
    setValor(parseInt(e.target.value));
    console.log(e.target.value)
  };

  return (
    <Container>
      <h1>useReducer </h1>
      <div>
        contador: {state.contador}
        <input
          type="number"
          name="contador"
          value={valor}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            dispatch({
              type: "incrementar",
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "decrementar",
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "set",
              payload: valor,
            });
          }}
        >
          set
        </button>
      </div>
    </Container>
  );
};

export default UseReducerPrueba;
