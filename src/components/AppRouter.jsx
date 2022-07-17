import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
      <AppRouterListener setInitialTabIndex={props.setInitialTabIndex} />
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
  const location = useLocation();
  const [curRoute, setCurRoute] = useState(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    props.setInitialTabIndex(curRoute);
  }, []);

  useEffect(() => {
    navigate(curRoute);
    document.title = `${pageTitlePrefix} - ${pageTitles[curRoute]}`;
    try {
      window.ga("set", "page", location.pathname + location.search);
      window.ga("send", "pageview");
    } catch {
      // Sometimes Google Analytics hasn't loaded yet, that's ok.
    }
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
