import Nav from "./nav"
import { Outlet } from "react-router-dom";
import Account from "./utils/account"

const Layout = ({auth, getName}) => {
  return (
    <>
    <Nav>
      <Account auth={auth} getName={getName} />
    </Nav>
    <Outlet />
    </>
  )
}

export default Layout;