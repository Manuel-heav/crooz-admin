import { Routes, Route } from "react-router-dom";
import PrivateRoute from './context/PrivateRoute';
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import Parent from "./components/Parent";
import Driver from "./components/Driver";
import SignUp from "./components/SignUp";
import AuthProvider from "./context/AuthContext";

function App() {

  function App() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Use PrivateRoute to protect routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/driver" element={<Driver />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/parent" element={<Parent />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
    }
  }

export default App;
