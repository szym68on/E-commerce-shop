function SearchBox() {
  return (
    <div className="flex md:gap-x-3 items-center md:w-[10%] w-[100%] justify-between gap-x-5">
      <p className="hidden md:block">Items</p>
      <input
        type="text"
        placeholder="Search"
        className="w-30 border-2 border-lightBlue md:border-0 md:w-20 outline-none md:bg-none 
        bg-[url('Search-mobile.png')] bg-no-repeat bg-[7px] pl-[30px] md:pl-0 ml-10 md:ml-0 md:py-0 py-3 md:rounded-none rounded-lg"
      ></input>
      <img
        src="search-icon.png"
        alt="Search Product"
        className="hidden w-5 h-5 md:block "
      />
      <div className="flex md:hidden mr-10 gap-x-2 items-center">
        <img src="love.png" alt="love" />
        <img src="Group.png" alt="group" className="w-[18px] h-[20px]" />
      </div>
    </div>
  );
}

export default SearchBox;
