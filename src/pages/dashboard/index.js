import { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Header from "components/header";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Grid container>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container direction="column">
        <Grid item>Dashboard Content</Grid>
        <Grid item>
          <Typography>{user.nickname}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withAuthenticationRequired(Dashboard);
