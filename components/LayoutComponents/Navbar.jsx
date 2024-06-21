import NavbarClient from "./NavbarClient";

function Navbar({ hiddenMenu = false }) {
  return <NavbarClient
    hiddenMenu={hiddenMenu} />
}


export default Navbar;
