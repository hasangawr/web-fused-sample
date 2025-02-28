import { SetStateAction } from "react";

interface MenuItemProps {
  item: { name: string; icon: React.ReactNode };
  active: string;
  setActive: React.Dispatch<SetStateAction<string>>;
  collapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  active,
  setActive,
  collapsed,
}) => {
  return (
    <div
      className={`flex items-center space-x-2 cursor-pointer p-2 rounded-lg text-sm ${
        active === item.name
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:text-blue-500"
      }`}
      onClick={() => setActive(item.name)}
    >
      <div>{item.icon}</div>
      <span
        className={`flex-1 ${collapsed ? "hidden" : "block"} ${
          active === item.name ? "font-semibold" : ""
        }`}
      >
        {item.name}
      </span>
      {active === item.name && (
        <div className="w-1 h-6 bg-blue-600 rounded-lg"></div>
      )}
    </div>
  );
};

export default MenuItem;
