import { Link } from "react-router-dom";
import styled from "styled-components";

const Back = styled.button`
  background-color: #696cff;
  border-radius: 15px;
  padding: 3px 9px;
  font-weight: 700;
  border: none;
  text-decoration: none;
  margin: 0 0 30px 0;

  a {
    color: white;
  }
`;

const BackHome = () => {
  return (
    <Back>
      <Link to="/">back home</Link>
    </Back>
  );
};

export default BackHome;
