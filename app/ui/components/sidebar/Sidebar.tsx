import { DocumentTextIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";

const menuItems = [
  { name: "Dashboard", icon: <Squares2X2Icon width={24} className="mr-4" /> },
  { name: "Accounting", icon: <Squares2X2Icon width={24} className="mr-4" /> },
  { name: "Accounting", icon: <Squares2X2Icon width={24} className="mr-4" /> },
  { name: "Accounting", icon: <Squares2X2Icon width={24} className="mr-4" /> },
  { name: "Accounting", icon: <Squares2X2Icon width={24} className="mr-4" /> },
  { name: "Accounting", icon: <Squares2X2Icon width={24} className="mr-4" /> },
];

const Sidebar = () => {
  return (
    <aside className="w-72.5 h-auto bg-[#121B3C] text-white p-5 rounded-br-[20px]">
      <div className="text-center mb-18.5">
        <h2 className="text-[#ffffcf] align-middle">Good Morning, Sachin</h2>
        <p className="text-xs font-light">Tue, 07 June 2022</p>
      </div>
      <hr />
      <ul className="mt-7.5 text-sm">
        {menuItems.map((item, index) => (
          <MenuItem key={index} name={item.name} icon={item.icon} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
