import { Route, Switch } from "react-router-dom";
import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/AuthPage";
const routes = [
  {
    path: "/",
    component: SingleProduct,
  },
  {
    path: "/login",
    component: Login,
  },
];

const RenderRoutes = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          exact
          key={index}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default RenderRoutes;
