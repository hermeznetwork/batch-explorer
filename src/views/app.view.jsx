import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import hermez from "@hermeznetwork/hermezjs";
import { WEBSITE_URL } from "../constants";

import Layout from "./shared/layout/layout.view";
import routes from "../routing/routes";
import useAppStyles from "./app.styles";
import UnderMaintenance from "./under-maintenance/under-maintenance.view";

function App() {
  useAppStyles();

  // Under maintenance indicator can have the following values:
  // 0 - NOT under maintenance
  // 1 - under maintenance
  const [isHermezUnderMaintenance, setIsHermezUnderMaintenance] = React.useState();

  const getData = () => {
    fetch(WEBSITE_URL + "network-status.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setIsHermezUnderMaintenance(data.isBatchExplorerUnderMaintenance === 1);
      })
      .catch(() => {
        console.error("Cannot obtain network status.");
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useLayoutEffect(() => {
    hermez.CoordinatorAPI.setBaseApiUrl(process.env.REACT_APP_HERMEZ_API_URL);
  }, []);

  if (isHermezUnderMaintenance === undefined) {
    return null;
  }

  return (
    <Layout displaySearchAndNavigation={!isHermezUnderMaintenance}>
      {isHermezUnderMaintenance ? (
        <Routes>
          <Route path="/under-maintenance" element={<UnderMaintenance />} />
          <Route path="*" element={<Navigate to="/under-maintenance" />} />
        </Routes>
      ) : (
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Layout>
  );
}

export default App;
