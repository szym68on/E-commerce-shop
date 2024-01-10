function TopPage({ children }) {
  return (
    <div className="container mx-auto flex justify-start md:justify-end gap-x-10 text-lightGray mt-2 border-b-[1px] border-lightBlue border-opacity-20 py-3">
      {children}
    </div>
  );
}

export default TopPage;
