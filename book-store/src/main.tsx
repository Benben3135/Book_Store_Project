import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/navbar/Navbar.tsx";
import { Provider , useSelector } from "react-redux";
import { store } from './app/store';
import { isScrollSelector } from './features/layout/isScrollSlice';


const AppWrapper = () => {
  const isOverflowNeeded = useSelector(isScrollSelector);

  return (
    <div className={`h-screen w-screen overflow-x-hidden ${isOverflowNeeded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);