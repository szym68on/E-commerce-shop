import { NavLink } from "react-router-dom";

function ListNavItem() {
  return (
    <ul className=" w-[70%] flex justify-around uppercase text-xl text-darkGray">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="bags">Bags</NavLink>
      </li>
      <li>
        <NavLink to="sneakers">Sneakers</NavLink>
      </li>
      <li>
        <NavLink to="belt">Belt</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default ListNavItem;
