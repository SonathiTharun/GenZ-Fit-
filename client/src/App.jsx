import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Classes = lazy(() => import("./pages/Classes"));
const Gyms = lazy(() => import("./pages/Gyms"));
const Home = lazy(() => import("./pages/Home"));
const Mental = lazy(() => import("./pages/MentalFitness"));
const Diet = lazy(() => import("./pages/DietPlan"));

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <div className="app">
        <Navbar />
        <AnimatePresence mode="wait">
          <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/dietplans"
                element={
                  <PageTransition>
                    <Diet />
                  </PageTransition>
                }
              />
              <Route
                path="/mental"
                element={
                  <PageTransition>
                    <Mental />
                  </PageTransition>
                }
              />
              <Route
                path="/classes"
                element={
                  <PageTransition>
                    <Classes />
                  </PageTransition>
                }
              />
              <Route
                path="/gyms"
                element={
                  <PageTransition>
                    <Gyms />
                  </PageTransition>
                }
              />
              <Route
                path="/login"
                element={
                  <PageTransition>
                    <Login />
                  </PageTransition>
                }
              />

              <Route
                path="/register"
                element={
                  <PageTransition>
                    <Register />
                  </PageTransition>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}
