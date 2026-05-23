import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Lazy load (sesuai file yang ADA)
const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Registrasi"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Home tanpa layout */}
        <Route path="/home" element={<Home />} />

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;