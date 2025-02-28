import { DocumentTextIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="w-72.5 h-auto bg-[#121B3C] text-white p-5 rounded-br-[20px]">
      <div className="text-center mb-18.5">
        <h2 className="text-[#ffffcf] align-middle">Good Morning, Sachin</h2>
        <p className="text-xs font-light">Tue, 07 June 2022</p>
      </div>
      <hr />
      <ul className="mt-7.5 text-sm">
        <li>
          <a href="#" className="block p-3 rounded hover:bg-gray-700">
            <div className="flex items-center">
              <DocumentTextIcon width={24} className="mr-4" />
              Dashboard
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="block p-3 rounded hover:bg-gray-700">
            <div className="flex items-center">
              <DocumentTextIcon width={24} className="mr-4" />
              Accounting
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="block p-3 rounded hover:bg-gray-700">
            <div className="flex items-center">
              <DocumentTextIcon width={24} className="mr-4" />
              Accounting
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="block p-3 rounded hover:bg-gray-700">
            <div className="flex items-center">
              <DocumentTextIcon width={24} className="mr-4" />
              Accounting
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="block p-3 rounded hover:bg-gray-700">
            <div className="flex items-center">
              <DocumentTextIcon width={24} className="mr-4" />
              Accounting
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="block p-3 rounded hover:bg-gray-700">
            <div className="flex items-center">
              <DocumentTextIcon width={24} className="mr-4" />
              Accounting
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
