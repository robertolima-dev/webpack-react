import React from "react";
// import { isAuthenticated } from "../services/auth";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// SITE
import Home from "../pages/site/home";

export default function Routes() {
//   const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuthenticated() ? (
//             <Component {...props} />
//           ) : (
//             <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//           )
//         }
//       />
//     );
//   };

  return (
    <BrowserRouter>
      <Switch>

          {/* ROTAS NAO SEGURAS  */}
          <Route exact path="/" component={Home} />

      </Switch>
    </BrowserRouter>
  );
}
