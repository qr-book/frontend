import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function GuestRoute({ children, ...rest }) {
  const { email } = useSelector((state) => state.user);
  let url = new URLSearchParams(document.location.search);

  return email === null ? (
    <Outlet />
  ) : (
    <Navigate replace to={url.get("redirect") || "/"} />
  );
}

export default GuestRoute;
