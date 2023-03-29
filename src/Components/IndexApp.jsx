import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: #eee;
`;
const IndexApp = () => {
  return (
    <Header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/useState">useState</Link>
        </li>
        <li>
          <Link to="/fnvsclass">Fn vs Class components</Link>
        </li>
        <li>
          <Link to="/customHook">Custom Hooks</Link>
        </li>
        <li>
          <Link to="/useEffect">UseEffect</Link>
        </li>
        <li>
          <Link to="/desuscribir-useEffect">Desuscribir UseEffect</Link>
        </li>
        <li>
          <Link to="/useReducer">UseReducer</Link>
        </li>
        
        <li>
          <Link to="/useReff">UseReff</Link>
        </li>
        <li>
          <Link to="/dropdownmenu">DropDown Menu</Link>
        </li>
      </ul>
    </Header>
  );
};

export default IndexApp;
