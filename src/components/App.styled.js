import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin: 0 auto;
  margin-right: 8px;

  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover {
    background-color: maroon;
    color: white;
  }
`;

export const Container = styled.div`
  width: 450px;
  margin: 20px auto;
  display: block;
  border-radius: 5px;

  padding: 50px;
  box-shadow:
    #00000040 0 54px 55px,
    #0000001f 0 -12px 30px,
    #0000001f 0 4px 6px,
    #0000002b 0 12px 13px,
    #00000017 0 -3px 5px;
`;

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 2px 6px;
  border: 1px solid 
  background-color: white;
  margin-bottom: 8px;
  margin-left: 6px;
`;

export const ButtonDetails = styled.button`
  padding: 2px 6px;
  border: 1px solid 
  background-color: white;
  margin-bottom: 8px;
  margin-right: 6px;
`;
