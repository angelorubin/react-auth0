import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/dashboard";
import LoginAuth0 from "pages/login-auth0";
import Logout from "pages/logout";
import RecoverPassword from "pages/recover-password";
import Root from "pages/root";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { CircularProgress } from "@material-ui/core";
import Loading from "components/loading";

const routes = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: Root,
  },
  {
    path: "/dashboard",
    key: "DASHBOARD",
    exact: true,
    component: withAuthenticationRequired(Dashboard, {
      onRedirecting: () => <Loading />,
    }),
  },
  {
    path: "*",
    key: "404",
    exact: true,
    component: <h1>Page not found.</h1>,
  },
];

export default routes;
