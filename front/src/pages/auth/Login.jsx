import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

import { loginUser } from "../../redux/auth/actions";

const Login = () => {
  const dispatch = useDispatch();

  const { user, loading, userLoggedIn, error } = useSelector(({ Auth }) => ({
    user: Auth.user,
    loading: Auth.loading,
    error: Auth.error,
    userLoggedIn: Auth.userLoggedIn,
  }));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().email().required("Please enter Email address"),
      password: yup
        .string()
        .required("Please enter Password")
        .min(6, "Password length should be at least 6 characters"),
    })
  );

  const methods = useForm({
    resolver: schemaResolver,
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onFormSubmit = (data) => {
    const { email, password } = data;

    dispatch(loginUser(email, password));
  };

  return (
    <>
      {userLoggedIn || user ? <Navigate to={"/"} /> : null}
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

                      <h6 className="h5 mb-0 mt-3">Welcome back</h6>
                      <p className="text-muted mt-1 mb-4">
                        Enter your email address and password to access
                      </p>
                      {error && (
                        <Alert variant="danger" className="my-2">
                          {error}
                        </Alert>
                      )}
                      <Form onSubmit={handleSubmit(onFormSubmit)}>
                        <Form.Group className="mb-2" controlId="formEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            {...register("email")}
                            value={formData.email}
                            onChange={handleInput}
                            isInvalid={errors.email}
                            placeholder="name@example.com"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.name?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            className={clsx({
                              "is-invalid": errors.password,
                            })}
                            type="password"
                            name="password"
                            {...register("password")}
                            value={formData.password}
                            onChange={handleInput}
                            placeholder="Password"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                          <Button
                            type="submit"
                            color="primary"
                            disabled={loading}
                          >
                            Login
                          </Button>
                        </Form.Group>
                      </Form>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
