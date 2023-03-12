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

const PhecodePage = lazyPreload(() => import("./PhecodePage"));
const DeptPage = lazyPreload(() => import("./DepartmentPage"));
const TimePage = lazyPreload(() => import("./TimePage"));
const IbdPage = lazyPreload(() => import("./IbdPage"));
const ZipcodePage = lazyPreload(() => import("./ZipcodePage"));
const FaqPage = lazyPreload(() => import("./FaqPage/FaqPage"));
const Home = lazyPreload(() => import("./Home"));

import css from "./AppRouter.module.css";

const pageTitles = {
  "/": "Home",
  "/faq": "FAQ",
  "/phecodes": "Phecodes",
  "/specialties": "Specialties",
  "/zipcodes": "Zip Codes",
  "/genetics": "Genetics",
  "/time": "Time",
};

const pageTitleSuffix = "Los Angeles IBD Group Utilization";

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

const trackPageInGoogleAnalytics = (path) => {
  window.ga("set", "page", path);
  window.ga("send", "pageview");
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
    if (curRoute in pageTitles) {
      document.title = `${pageTitles[curRoute]} - ${pageTitleSuffix}`;
    } else {
      // Not sure why this happens when Google indexes us, but w/e
      console.error(`Route with no prefix... ${curRoute}`);
      document.title = pageTitleSuffix;
    }
    const path = location.pathname + location.search;
    try {
      trackPageInGoogleAnalytics(path);
    } catch (exc) {
      // Google Analytics hasn't loaded yet, give it a second...
      console.error(exc);
      setTimeout(() => {
        trackPageInGoogleAnalytics(path);
      }, 3000);
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
