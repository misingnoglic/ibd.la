import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function lazyPreload(importFn) {
  const Component = lazy(importFn);
  Component.preload = importFn;
  return Component;
}

const TIME_UNTIL_PRELOAD_MS = 3000;

import { pageTitlePrefix, pageTitles } from "../constants";
const PhecodePage = lazyPreload(() => import("./PhecodePage"));
const DeptPage = lazyPreload(() => import("./DepartmentPage"));
const TimePage = lazyPreload(() => import("./TimePage"));
const IbdPage = lazyPreload(() => import("./IbdPage"));
const ZipcodePage = lazyPreload(() => import("./ZipcodePage"));
const FaqPage = lazyPreload(() => import("./FaqPage"));
const Home = lazyPreload(() => import("./Home"));

import css from "./AppRouter.module.css";

const AppRouter = (props) => {
  useEffect(() => {
    setTimeout(() => {
      PhecodePage.preload();
      DeptPage.preload();
      TimePage.preload();
      IbdPage.preload();
      ZipcodePage.preload();
      FaqPage.preload();
      Home.preload();
    }, TIME_UNTIL_PRELOAD_MS);
  }, []);
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
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/phecodes" element={<PhecodePage />} />
          <Route path="/specialties" element={<DeptPage />} />
          <Route path="/zipcodes" element={<ZipcodePage />} />
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

  // Bubble up the initial page to the App.js
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
