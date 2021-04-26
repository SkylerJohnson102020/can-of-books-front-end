import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function LoginButton() {
  const {
    loginWithPopup,
  } = useAuth0();

  return (
    <Button onClick={loginWithPopup}>Log in</Button>
  );
}

export default LoginButton;