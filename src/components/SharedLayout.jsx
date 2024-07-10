import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, Header } from "./App.styled";

export default function SharedLayout() {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">
            Movies
          </StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
