import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading"; 

// Layout tetap diimpor secara sinkron agar struktur dasar langsung muncul
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// --- IMPLEMENTASI REACT LAZY ---
// Halaman Home & Dashboard
const Home = React.lazy(() => import("./pages/Home"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Halaman Auth (Login sekarang dimuat secara Lazy)
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Registrasi"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    /* --- IMPLEMENTASI SUSPENSE --- */
    /* Loading akan muncul sebagai fallback saat komponen Login sedang diunduh */
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Halaman Home Tanpa Sidebar */}
        <Route path="/home" element={<Home />} />

        {/* Grup Rute dengan Sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        {/* Grup Rute Auth dengan AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Error 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;