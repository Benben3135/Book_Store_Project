import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SpecificBookPage from "./components/books/SpecificBookPage";
import Navbar from "./components/navbar/Navbar";
import AuthorPage from "./pages/authorPage/AuthorPage";
import Favorite from "./pages/favorite/favorite";
import HomePage from "./pages/homepage/Homepage";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import ProRegister from "./pages/proRegister/proRegister";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
    <PayPalScriptProvider options={{ clientId: "test" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite/:uid" element={<Favorite />} />
          <Route path="/bookPage/:book_id" element={<SpecificBookPage />} />
          <Route path="/authorPage/:authorName" element={<AuthorPage />} />
          <Route path="/proRegister" element={<ProRegister />} />
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

export default App;
