import { Routes, Route } from "react-router-dom";
import PrivateRoute from './context/PrivateRoute';
import Home from './components/Home';
import Login from "./components/Login";
import Parent from "./components/Parent";
import Driver from "./components/Driver";
import SignUp from "./components/SignUp";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={<PrivateRoute><Home /></PrivateRoute>}
        />
        <Route
          path="/driver"
          element={<PrivateRoute><Driver /></PrivateRoute>}
        />
        <Route
          path="/parent"
          element={<PrivateRoute><Parent /></PrivateRoute>}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
