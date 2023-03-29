import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px 0;
  .click-on-me {
    background-color: salmon;
    border-radius: 8px;
    border: none;
    width: 50%;
    padding: 4px;
    cursor: pointer;
  }
  .focus {
    display: flex;
    justify-content: space-between;
  }
`;

const UseReffComponent = () => {
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref);
    console.log(ref.current); // es como usar document.getElemetByID
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Es solo una prueba(mala practica)";
  };

  const focus = () => {
    inputRef.current.focus();
  };
  console.log(ref);
  return (
    <div>
      <Container>
        <div>
          <h1>useRef: Obtener Referencias del mismo DOM</h1>
          <p>es como usar document.getElemetByID</p>
        </div>
        <div className="click-on-me" onClick={click} ref={ref}>
          Click on me and open the console
        </div>
      </Container>
      <Container>
        <div className="focus">

        <input ref={inputRef} />
        <button onClick={focus}>Focus</button>
        </div>


      </Container>
      <span>*Siempre pasarle la propiedad de ref al elemento {`<input ref={inputRef}>`}
      </span>
    </div>
  );
};

export default UseReffComponent;

// Obtener Referencias del mismo DOM
