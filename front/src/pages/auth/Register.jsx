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
                        <span className="logo-lg">
                          <img src={logoDark} alt="" height="24" />
                        </span>
                      </Link>

                      <Link to="/" className="logo logo-light text-center">
                        <span className="logo-lg">
                          <img src={logoLight} alt="" height="24" />
                        </span>
                      </Link>
                    </div>

                    <h6 className="h5 mb-0 mt-3">{t("Create your account")}</h6>
                    <p className="text-muted mt-1 mb-4">
                      {t("Create a free account and start using Shreyu")}
                    </p>
                    <Form.Control />
                  </Col>
                  <Col lg={6} className="d-none d-md-inline-block">
                    <div className="auth-page-sidebar">
                      <div className="overlay"></div>
                      <div className="auth-user-testimonial">
                        <p className="fs-24 fw-bold text-white mb-1">
                          {t("I simply love it!")}
                        </p>
                        <p className="lead">
                          "{t("It's a elegent templete. I love it very much!")}"
                        </p>
                        <p>- {t("Admin User")}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Row className="mt-3">
              <Col xs={12} className="text-center">
                <p className="text-muted">
                  {t("Already have account?")}{" "}
                  <Link
                    to={"/auth/login"}
                    className="text-primary fw-bold ms-1"
                  >
                    {t("Login")}
                  </Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;