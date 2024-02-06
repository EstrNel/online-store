import React from "react";

// Log in page and Welcome
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeCurrentUser } from "../store/userSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [loggedOut, setLoggedOut] = useState(true);
  const [userName, setUserName] = useState("");

  // dispatch function to execute reducer functions
  const dispatch = useDispatch();

  // Use selector for current user
  const loggedUser = useSelector((state) => state.userDetail.currentUser);

  const doLogin = () => {
    if (userName.length > 0 && loggedOut) {
      setLoggedOut(false);
      dispatch(storeCurrentUser(userName));
    } else if (!loggedOut) {
      setUserName("");
      setLoggedOut(true);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      {loggedOut ? (
        <InputGroup className="mb-3">
          <InputGroup.Text>User Name :</InputGroup.Text>
          <Form.Control
            id="userName"
            onChange={(event) => setUserName(event.target.value)}
            //onChange={(event) => dispatch(storeCurrentUser(event.target.value))}
            aria-label="Enter User Name"
          />
        </InputGroup>
      ) : (
        <h1>Welcome {userName}</h1>
      )}

      <Button onClick={doLogin} id="btnLogin">
        {loggedOut ? "Log In" : "Log Out"}
      </Button>
    </>
  );
};

export default Login;
