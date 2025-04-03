import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginRegister from "./Components/Login & Sign Up/LoginRegister";
import Header from "./Components/Landing Page/Header";
import About from "./Components/Landing Page/About";
import Class from "./Components/Landing Page/Class";
import Trainer from "./Components/Landing Page/Trainer";
import Price from "./Components/Landing Page/Price";
import Client from "./Components/Landing Page/Client";
import Footer from "./Components/Landing Page/Footer";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import ClientDashboard from "./Components/Dashboard/ClientDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminExerciseList from "./Components/Exercises/AdminExerciseList";
import ExerciseForm from "./Components/Exercises/ExerciseForm";
import ClientExerciseList from "./Components/Exercises/ClientExerciseList";
import ExerciseDetail from "./Components/Exercises/ExerciseDetail";
import AdminProductList from "./Components/Product/AdminProductList ";
import ProductForm from "./Components/Product/ProductForm";
import ClientProductList from "./Components/Product/ClientProductList ";
import ProductDetail from "./Components/Product/ProductDetail";
import UserManagement from "./Components/User/UserManagement ";
import AppProvider from "./Context/AppContext";
import "remixicon/fonts/remixicon.css";
import Food from "./Components/Food/Food";
import Calculator from "./Components/CalorieCalculator/Calculator";
import Store from "./Components/StoreCarte/Store";
import Detail from "./Components/StoreCarte/Detail";
// import { Carte } from "./Components/Carte/Carte";
// import Carte from "./Components/Carte/Carte";
// import Carte from "./Components/Carte/Carte";

const NotFoundPage = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-2xl text-red-600 font-semibold">
      404 - Page Not Found
    </div>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Class />
              <Trainer />
              <Price />
              <Client />
              <Footer />
            </>
          }
        />

        {/* Login/Register Route */}
        <Route path="/login-register" element={<LoginRegister />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <UserManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/exercises"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminExerciseList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/exercises/create"
          element={
            <ProtectedRoute requiredRole="admin">
              <ExerciseForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/exercises/edit/:id"
          element={
            <ProtectedRoute requiredRole="admin">
              <ExerciseForm />
            </ProtectedRoute>
          }
        />

        {/* Admin Product Routes */}
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products/create"
          element={
            <ProtectedRoute requiredRole="admin">
              <ProductForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <ProtectedRoute requiredRole="admin">
              <ProductForm />
            </ProtectedRoute>
          }
        />

        {/* Client Routes */}
        <Route
          path="/client-dashboard"
          element={
            <ProtectedRoute requiredRole="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-exercises"
          element={
            <ProtectedRoute requiredRole="client">
              <ClientExerciseList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-exercises/:id"
          element={
            <ProtectedRoute requiredRole="client">
              <ExerciseDetail />
            </ProtectedRoute>
          }
        />

        {/* Client Product Routes */}
        <Route
          path="/client-products"
          element={
            <ProtectedRoute requiredRole="client">
              <ClientProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/client-products/:id"
          element={
            <ProtectedRoute requiredRole="client">
              <ProductDetail />
            </ProtectedRoute>
          }
        />

        {/************************** Client Food Routes ****************************/}
        <Route path="/client-food" element={<Food />} />

        {/*********************  Client Calculator Calories Routes ***********************/}
        <Route path="/client-calculate" element={<Calculator />} />

        {/************************** Store *********************************/}
        <Route path="/store-products" element={<Store />} />

        {/****************************** Add To Carte **********************************/}
        {/* <Route path="/add-to-carte" element={<Carte />} /> */}


        {/*********************** Detail Product ********************/}
        <Route path="/store-products/:slug" element={<Detail />} />
        {/* Fallback Route for Unmatched Paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProvider>
  );
}