import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <ul className="flex justify-between w-[85%] md:w-[75%] mt-8 text-[15px] md:text-[18px] items-center md:ml-10">
      <li>
        <NavLink to="All">All</NavLink>
      </li>
      <li>
        <NavLink to="bagsMain">Bags</NavLink>
      </li>
      <li>
        <NavLink to="sneakersMain">Sneakers</NavLink>
      </li>
      <li>
        <NavLink to="beltMain">Belt</NavLink>
      </li>
      <li>
        <NavLink to="sunglassesMain">Sunglasses</NavLink>
      </li>
    </ul>
  );
}

export default Categories;
