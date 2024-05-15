import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import SigninPage from "./pages/SigninPage";
import OrdersPage from "./orders/page";
import Signup from "./pages/SignupPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route
          path="/signin"
          element={<SigninPage/>}
        />
        <Route
          path="/signup"
          element={<SignupPage/>}
        />
        <Route
          path="/order"
          element={<OrdersPage/>}
        />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
