import React from "react";
import Header from "../components/organisms/Header";
import BookDiscoveryTemplate from "./MainTemplate";
import routes from "../routes/routes";
import { Routes, Route } from "react-router-dom";
const Templates = [
  {
    component: (
      <BookDiscoveryTemplate header={<Header />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </BookDiscoveryTemplate>
    ),
  },
];
export default Templates;
