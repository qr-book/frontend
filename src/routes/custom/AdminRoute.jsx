import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const { admin } = useSelector((state) => state.user);
  const url = new URLSearchParams();
  url.set("redirect", document.location.pathname + document.location.search);

  return admin === true ? (
    <Outlet />
  ) : (
    <Navigate replace to={"/whatisthispage"} />
  );
}

export default AdminRoute;
