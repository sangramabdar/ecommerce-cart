import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-slate-100 px-4 pb-4 h-fit">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/ecommerce-cart-deploy" element={<HomePage />}></Route>
            <Route path="/ecommerce-cart-deploy/cart" element={<CartPage />} />
            <Route
              path="*"
              element={<Navigate replace to="/ecommerce-cart-deploy" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
