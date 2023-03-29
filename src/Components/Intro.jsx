//*componentes funcionales en react === fn puras: devuelven siempre el mismo valor

import styled from "styled-components";

//Styles
const AppComponent = styled.div`
  .container {
    border: 4px #bbb solid;
    width: 700px;
    padding: 30px;
  }
  .comp-1 {
    border: 4px #ccc solid;
    font-size: 18px;
    font-weight: 900;
  }

  .props {
    font-size: 24px;
    font-weight: 600;
    color: blue;
  }
`;

//fn impura: fn que cada vez que la llamamos devuelve algo distinto es decir su valor puede cambiar
// eg. funcion que hace el llamado a una API o a una DB
const impura = () => new Date().toLocaleString();
console.log(impura());

const Mycomponent = ({ myProp }) => {
  return (
    <div className="comp-1">
      Name:
      <span className="props">{myProp}</span>
    </div>
  );
};

function Intro() {
  return (
    <AppComponent>
      <div className="container">
        <h1 className="props">Intro component</h1>
        <Mycomponent myProp={"This is a prop from Intro component"} />
      </div>
    </AppComponent>
  );
}

export default Intro;
