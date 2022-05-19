import { Link } from "react-router-dom";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
  return (
    <div className="account-pages my-5">
      <Container>
        <Row className="justify-content-center">
          <Col xl={10}>
            <Card>
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col lg={6} className="p-4">
                    <div className="auth-logo mx-auto">
                      <Link to="/" className="logo logo-dark text-center">
                        <span className="logo-lg">Junno Pham</span>
                      </Link>

                      <Link to="/" className="logo logo-light text-center">
                        <span className="logo-lg">Junno Pham</span>
                      </Link>
                    </div>

                    <h6 className="h5 mb-0 mt-3">Create your account</h6>
                    <p className="text-muted mt-1 mb-4">Gì gì đó</p>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                  </Col>
                  <Col lg={6} className="d-none d-md-inline-block">
                    <div className="auth-page-sidebar">
                      <div className="overlay"></div>
                      <div className="auth-user-testimonial">
                        <p className="fs-24 fw-bold text-white mb-1">
                          I simply love it!
                        </p>
                        <p className="lead">
                          "It's a elegant template. I love it very much!"
                        </p>
                        <p>- Admin User</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Row className="mt-3">
              <Col xs={12} className="text-center">
                <p className="text-muted">
                  Already have account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="text-primary fw-bold ms-1"
                  >
                    Login
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
