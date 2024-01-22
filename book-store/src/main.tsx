import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import App from "./App.tsx";
import { store } from './app/store';
import { isScrollSelector } from './features/layout/isScrollSlice';
import "./index.css";


const AppWrapper = () => {
  const isOverflowNeeded = useSelector(isScrollSelector);

  return (
    <div className={`h-screen w-screen overflow-x-hidden ${isOverflowNeeded ? 'overflow-y-auto overflow-x-hidden' : 'overflow-hidden'}`}>
      <App />
    </div>
  );
};

//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);