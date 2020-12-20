import React from "react";
import {
  Grid,
  Button,
  Paper,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    overflowX: "hidden",
  },
  loginContainer: {
    minHeight: "100vh",
    padding: 20,
  },
  login: {
    padding: 30,
  },
}));

const Root = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.loginContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card className={classes.login}>
            <CardContent>
              <Button variant="contained" onClick={() => loginWithRedirect()}>
                Login
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Root;
