import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background-color: #4A63E7;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  :hover {
    color: #1883ba;
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
  }
  :focus{
    color: #1883ba;
    background-color: #ffffff;
  }
`;

export default Button;
