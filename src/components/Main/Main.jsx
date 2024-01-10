import TitleMain from "./TitleMain";
import Categories from "./Categories";
import { Outlet } from "react-router-dom";
function Main() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center">
      <TitleMain />
      <Categories />
      <Outlet />
    </main>
  );
}

export default Main;
