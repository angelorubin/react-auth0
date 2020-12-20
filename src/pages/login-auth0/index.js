import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "@material-ui/core";

const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    return loginWithRedirect();
  }, []);

  return null;
};

export default LoginAuth0;
