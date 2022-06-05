import Nav from "./nav"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default Layout;