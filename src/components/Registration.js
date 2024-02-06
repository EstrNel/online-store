import React from "react";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";
import Login from "./Login";

// Capture/Register new user and validate fields

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const validate = (values) => {
  const errors = {};

  declare function Navigate(props: NavigateProps): null;

  interface NavigateProps {
    to: To;
    replace?: boolean;
    state?: any;
    relative?: RelativeRoutingType;
  }

  //First Name (Should not exceed 15 characters)
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  // Surname (Should not exceed 20 characters)
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  //User Name (Should not exceed 15 characters)
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  // A valid email address
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // A password (Must contain 8 characters or more, at least one
  // uppercase and lowercase letter, a number and a special case
  // character)
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Password must contain at least one number";
  } else if (
    !/[/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?*$/]/.test(values.password)
  ) {
    errors.password = "Password must contain at least one special character";
  }

  //  A confirm password field (To ensure both passwords match)
  // Make sure that the data entered is in the correct format (i.e., validate the
  //user input)
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword.length < 8) {
    errors.confirmPassword = "Must be 8 characters or more";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Value must match password";
  }

  return errors;
};

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      <Navigate to="/login" replace={true} />;
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit} style={{ margin: "50px" }}>
      <Form.Group as={Row} className="mb-3" id="logGroup" autoFocus={true}>
        <Form.Label column sm="2" htmlFor="firstName">
          First Name
        </Form.Label>
        <Col>
          <Form.Control
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
        </Col>
        <Col>
          <Form.Text className="text-muted">
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" id="logGroup" autoFocus={true}>
        <Form.Label column sm="2" htmlFor="lastName">
          Last Name
        </Form.Label>

        <Col>
          <Form.Control
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
        </Col>
        <Col>
          <Form.Text className="text-muted">
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" id="logGroup" autoFocus={true}>
        <Form.Label column sm="2" htmlFor="userName">
          User Name
        </Form.Label>
        <Col>
          {" "}
          <Form.Control
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
        </Col>
        <Col>
          <Form.Text className="text-muted">
            {formik.errors.userName ? (
              <div>{formik.errors.userName}</div>
            ) : null}
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" id="logGroup" autoFocus={true}>
        <Form.Label column sm="2" htmlFor="email">
          Email Address
        </Form.Label>
        <Col>
          <Form.Control
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </Col>
        <Col>
          <Form.Text className="text-muted">
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" id="logGroup" autoFocus={true}>
        <Form.Label column sm="2" htmlFor="password">
          Password
        </Form.Label>
        <Col>
          <Form.Control
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </Col>
        <Col>
          <Form.Text className="text-muted">
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" id="logGroup" autoFocus={true}>
        <Form.Label column sm="2" htmlFor="confirmPassword">
          Confirm Password
        </Form.Label>
        <Col>
          <Form.Control
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
        </Col>
        <Col>
          <Form.Text className="text-muted">
            {formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </Form.Text>
        </Col>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Registration;
