const Breadcrumb = () => {
  return (
    <nav className=" text-[#707EAE] mt-5">
      <ol className="flex items-center space-x-1">
        <li>
          <a href="#" className="hover:underline text-sm font-bold">
            Home
          </a>
        </li>
        <span>/</span>
        <li>
          <a href="#" className="hover:underline text-sm font-bold">
            Client Listing
          </a>
        </li>
        <span>/</span>
        <li className="text-xl font-bold text-[#1F2D5C]">Client Profile</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
