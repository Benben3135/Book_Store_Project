import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/homepage/Homepage"
import TestPage from "./pages/test/TestPage";
import Profile from "./pages/profile/Profile";
import Google from "../src/pages/googlebooks/Google"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homePage" element={<HomePage/>}/>
        <Route path="/test" element={<TestPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/google" element={<Google/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
