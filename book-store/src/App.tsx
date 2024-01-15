import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/homepage/Homepage"
import TestPage from "./pages/test/TestPage";
import Profile from "./pages/profile/Profile";
import Favorite from "./pages/favorite/favorite";
import SpecificBookPage from "./components/books/SpecificBookPage";
import AuthorPage from "./pages/authorPage/AuthorPage";

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
        <Route path="/favorite/:uid" element={<Favorite/>}/>
        <Route path="/bookPage/:book_id" element={<SpecificBookPage/>}/>
        <Route path="/authorPage/:authorName" element={<AuthorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
