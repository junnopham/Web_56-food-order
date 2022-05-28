import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logoutUser } from "../redux/auth/actions";

const Navigation = () => {
  const dispatch = useDispatch();

  const { user, userLoggedIn, userLogout } = useSelector(({ Auth }) => ({
    user: Auth.user,
    userLoggedIn: Auth.userLoggedIn,
    userLogout: Auth.userLogout,
  }));

  const handleLogout = () => {
    dispatch(logoutUser);
  };

  return (
    <>
      {userLogout && <Navigate to={"/login"} />}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            Junno Pham
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {userLoggedIn ? (
              <Nav>
                <Link to="#" className="nav-link">
                  {user.name}
                </Link>
                <Button
                  variant="link"
                  className="nav-link"
                  onClick={() => handleLogout()}
                >
                  Logout
                </Button>
              </Nav>
            ) : (
              <Nav>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
