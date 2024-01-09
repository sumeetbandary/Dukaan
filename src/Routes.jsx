import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PaymentscashfreedashboardOne = React.lazy(
  () => import("pages/PaymentscashfreedashboardOne"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<PaymentscashfreedashboardOne />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/paymentscashfreedashboardone"
            element={<PaymentscashfreedashboardOne />}
          />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
