import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import hermez from "@hermeznetwork/hermezjs";

import Layout from "./shared/layout/layout.view";
import routes from "../routing/routes";
import useAppStyles from "./app.styles";

function App() {
  useAppStyles();

  React.useLayoutEffect(() => {
    hermez.CoordinatorAPI.setBaseApiUrl(process.env.REACT_APP_HERMEZ_API_URL);
  }, []);

  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.Component />} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
