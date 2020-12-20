import React from "react";
import routes from "routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "context/auth/auth0-provider-with-history";

const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Switch>
          {routes.map((route) => {
            return <Route {...route} />;
          })}
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export default App;
