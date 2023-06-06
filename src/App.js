import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import Contact from "./pages/contact/Contact";
import Register from "./pages/forms/Register";
import Book from "./pages/book/Book";
import MainLayout from "./components/Layouts/MainLayout";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/Login";
import Wishlist from "./pages/wishlist/Wishlist";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser) ; 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="authors" element={<Authors />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
            <Route path="book/:id" element={<Book />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route
              path="wishlist"
              element={
                <RequireAuth>
                  <Wishlist />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
