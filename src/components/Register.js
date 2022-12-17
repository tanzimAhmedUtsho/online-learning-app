import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Name", name, "Email:", email, "Password", password);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least two uppercase!!");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Please provide at least six character!!");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please provide at least one special character!!");
      return;
    }
    setPasswordError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error("error", error);
        setPasswordError(error.message);
      });
  };

  const handleEmailBlur = (event) => {
    console.log("Email:", event.target.value);
  };

  const handlePasswordBlur = (event) => {
    console.log("Password:", event.target.value);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please check your email and verify!!");
    });
  };

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("display name updated");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary">Please Register!!!</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        {success && <p className="text-success">User create Successfully.</p>}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account? Please <Link to="/login">Log in</Link>{" "}
      </p>
    </div>
  );
};

export default RegisterReactBootstrap;
