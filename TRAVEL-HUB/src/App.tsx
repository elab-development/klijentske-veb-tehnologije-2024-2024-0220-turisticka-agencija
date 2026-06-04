import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.tsx";
import Offers from "./pages/Offers.tsx";
import WishList from "./pages/WishList.tsx";
import Profile from "./pages/Profile.tsx";
import Details from "./pages/Details.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Verify from "./pages/Verify.tsx";
import Reset from "./pages/Reset.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        {/* Form Routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/reset" element={<Reset />} />

        {/* Main Routes */}

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      {/* <Toaster /> */}
    </main>
  );
};

export default App;
