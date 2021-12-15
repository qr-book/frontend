import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Admin,
  Create,
  Home,
  Login,
  MyQRs,
  NotFounded,
  Profile,
  ProfileEdit,
  Registration,
  Rules,
} from "../pages";

import { GuestRoute, PrivateRoute, AdminRoute } from "./custom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<ProfileEdit />} />
        <Route path="/my" element={<MyQRs />} />
      </Route>
      <Route path="/" element={<AdminRoute />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/rules" element={<Rules />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NotFounded />} />
    </Routes>
  );
}

export default Pages;
