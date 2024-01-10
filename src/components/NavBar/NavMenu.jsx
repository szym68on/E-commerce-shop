import Logo from "./Logo";
import ListNavItem from "./ListNavItem";
function NavMenu() {
  return (
    <nav className=" hidden md:flex container mx-auto mt-5 justify-between">
      <Logo />
      <ListNavItem />
    </nav>
  );
}

export default NavMenu;
