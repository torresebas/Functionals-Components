import { Component, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px 0;
`;

//Class compo
class Comp1 extends Component {
  state = { contador: 0 };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <Container>
        <h1>this is a Class component</h1>
        <div>
          Contador : {this.state.contador}
          <button onClick={this.incrementar}> Incrementar</button>
        </div>
      </Container>
    );
  }
}

//Functional Component
const Comp2 = () => {
  const [contador, setContador] = useState(0);
  return (
    <Container>
      <h1>this is a Functional component</h1>
      <div>
        Contador : {contador}
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Incrementar
        </button>
      </div>
    </Container>
  );
};

const FnVsClass = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
    </div>
  );
};

export default FnVsClass;
