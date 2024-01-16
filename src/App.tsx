import "./App.css";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { urls } from "./utils/routes";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    // Cart Context Provider
    <CartProvider>
      <BrowserRouter>
        <div className="container mx-auto flex flex-col min-h-screen items-center bg-sky-100">
          <Header />
          <Main>
            <Routes>
              {/* Home: games list */}
              <Route
                path={urls.home}
                element={<ItemListContainer item={"game"} />}
                // element={<ItemListContainer item={"game"} filter={false} />}
              />
              {/* Store: albums list */}
              <Route
                path={urls.category}
                element={<ItemListContainer item={"album"} />}
              />
              {/* Store: albums list for each game */}
              <Route
                path={urls.category + "/:gameId"}
                element={<ItemListContainer item={"album"} />}
              />

              {/* Album: detail */}
              <Route
                path={urls.item + "/:albumId"}
                element={<ItemDetailContainer />}
              />

              {/* Cart */}
              <Route path={urls.cart} element={<Cart />} />

              {/* Checkout */}
              <Route path={urls.checkout} element={<Checkout />} />

              {/* Automatic redirection */}
              <Route path="*" element={<Navigate to={urls.home} />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
