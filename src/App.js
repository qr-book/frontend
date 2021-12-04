import React from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import { useDispatch } from "react-redux";
import { setQRs } from "./redux/actions/qrs";

import { Footer, Header } from "./components";
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
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/qrs?_sort=date&_order=asc").then(({ data }) => {
      dispatch(setQRs(data));
    });
  }, [dispatch]);

  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
