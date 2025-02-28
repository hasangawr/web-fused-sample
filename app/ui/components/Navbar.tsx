import {
  MagnifyingGlassIcon,
  BellIcon,
  MoonIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header className="bg-white p-4 flex justify-end items-center mt-7 rounded-lg h-12">
      <div className="flex items-center space-x-5">
        {/* Search Bar */}
        <div className="flex items-center bg-[#F4F7FE] rounded-[49] p-4 w-[140] h-[35]">
          <MagnifyingGlassIcon width={15} className="mr-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none text-sm"
          />
        </div>

        <button className="text-[#A3AED0] hover:text-gray-800 w-6 cursor-pointer">
          <BellIcon />
        </button>

        <button className="text-[#A3AED0] hover:text-gray-800 w-6 cursor-pointer">
          <MoonIcon />
        </button>

        <button className="text-[#A3AED0] hover:text-gray-800 w-6 cursor-pointer">
          <ExclamationCircleIcon />
        </button>

        <img
          src="https://i.pravatar.cc/100?img=59"
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Navbar;
