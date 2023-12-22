import { Route, Router, Routes } from "react-router-dom"
import PrivateRoute from './context/PrivateRoute'
import Home from './components/Home'
import Login from "./components/Login"
import Parent from "./components/Parent"
import Driver from "./components/Driver"
import SignUp from "./components/SignUp"

function App() {
  return (
    <Routes> 
      <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} exact/>
          <Route path="/parent" element={<Parent />} exact/>
          <Route path="/driver" element={<Driver />} exact/>
      </Route>
      <Route element={<Login />} path="/login"/>
      {/* <Route element={<SignUp />} path="/signup"/> */}
    </Routes>
  )
}

export default App
