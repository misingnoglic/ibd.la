import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { pageTitlePrefix, pageTitles } from "../constants";
const PhecodePage = lazy(() => import("./PhecodePage"));
const DeptPage = lazy(() => import("./DepartmentPage"));
const TimePage = lazy(() => import("./TimePage"));
const IbdPage = lazy(() => import("./IbdPage"));
const DeckGlMap = lazy(() => import("./DeckGlMap"));
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

import css from "./AppRouter.module.css";

const AppRouter = (props) => {
  return (
    <Router>
      <AppRouterListener />
      <Suspense
        fallback={
          <div className={css.loadingIndicator}>
            <CircularProgress color="inherit" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/phecodes" element={<PhecodePage />} />
          <Route path="/specialties" element={<DeptPage />} />
          <Route path="/zipcodes" element={<DeckGlMap />} />
          <Route path="/genetics" element={<IbdPage />} />
          <Route path="/time" element={<TimePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

const AppRouterListener = (props) => {
  const [curRoute, setCurRoute] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(curRoute);
    document.title = `${pageTitlePrefix} - ${pageTitles[curRoute]}`;
    window.ga("set", "page", location.pathname + location.search);
    window.ga("send", "pageview");
  }, [curRoute]);

  window.addEventListener(
    "changeroute",
    (e) => {
      const { detail: path } = e;
      setCurRoute(path);
    },
    true
  );

  return null;
};

export default AppRouter;
