import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
