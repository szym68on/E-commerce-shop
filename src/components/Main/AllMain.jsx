import ItemList from "./ItemList";
import PContent from "./PContent";
function AllMain() {
  return (
    <>
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </div>
      <PContent />
    </>
  );
}

export default AllMain;
