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

import { registerUser } from "../../redux/auth/actions";

const Register = () => {
  const dispatch = useDispatch();

  const { loading, userSignUp, error } = useSelector(({ Auth }) => ({
    loading: Auth.loading,
    error: Auth.error,
    userSignUp: Auth.userSignUp,
  }));

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    term: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "term" ? e.target.checked : value,
    });
  };

  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().email().required("Please enter Email address"),
      name: yup.string().required("Please enter your name"),
      password: yup
        .string()
        .required("Please enter Password")
        .min(6, "Password length should be at least 6 characters"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match")
        .required("This value is required."),
      term: yup.bool().oneOf([true], "Please agree the term!"),
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
    const { email, name, password, confirmPassword } = data;

    dispatch(registerUser(email, name, password, confirmPassword));
  };

  return (
    <>
      {userSignUp && <Navigate to={"/login"} />}
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
                      <p className="text-muted mt-1 mb-4">...</p>
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
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            className={clsx({
                              "is-invalid": errors.name,
                            })}
                            type="text"
                            name="name"
                            {...register("name")}
                            value={formData.name}
                            onChange={handleInput}
                            placeholder="John Smith"
                          />
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
                        <Form.Group className="mb-2">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            className={clsx({
                              "is-invalid": errors.confirmPassword,
                            })}
                            type="password"
                            name="confirmPassword"
                            {...register("confirmPassword")}
                            value={formData.confirmPassword}
                            onChange={handleInput}
                            placeholder="Confirm Password"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.confirmPassword?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Check
                            className={clsx({
                              "is-invalid": errors.term,
                            })}
                            name="term"
                            {...register("term")}
                            onChange={handleInput}
                            label="Agree to terms and conditions"
                            checked={formData.term}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.term?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                          <Button type="submit" color="primary">
                            Register
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
    </>
  );
};

export default Register;
