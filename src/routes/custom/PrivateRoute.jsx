import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const { email } = useSelector((state) => state.user);
  const url = new URLSearchParams();
  url.set("redirect", document.location.pathname + document.location.search);

  return email !== null ? (
    <Outlet />
  ) : (
    <Navigate replace to={{ pathname: "/login", search: url.toString() }} />
  );
}

export default PrivateRoute;
