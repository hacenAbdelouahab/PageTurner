import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import Contact from "./pages/contact/Contact";
import Register from "./pages/forms/Register";
import Book from "./pages/book/Book";
import MainLayout from "./components/Layouts/MainLayout";
import Cart from "./pages/cart/Cart";
import Login from "./pages/forms/Login";

function App() {
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
