import { Redirect, Route, Switch } from "react-router-dom";
import Authorization from "./pages/Authorization";
import CreateLink from "./pages/CreateLink";
import LinkDetails from "./pages/LinkDetails";
import Links from "./pages/Links";

const Routes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route exact path="/links">
          <Links />
        </Route>
        <Route exact path="/create">
          <CreateLink />
        </Route>
        <Route path="/details/:id">
          <LinkDetails />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Authorization />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
