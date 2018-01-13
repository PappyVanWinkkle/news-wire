/*
* Navabr component of the Application
*/
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
  font-family: "UnifrakturMaguntia", cursive;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <nav className="navbar fixed-top navbar-light bg-primary">
          <div>
            <div>
              <a className="navbar-brand" href={``}>
                NewsWire
              </a>
            </div>
          </div>
        </nav>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
