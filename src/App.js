import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import {
  Admin,
  Home,
  Login,
  MyQRs,
  NotFounded,
  Profile,
  ProfileEdit,
  Registration,
  Rules,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<ProfileEdit />} />
          <Route path="/my" element={<MyQRs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
