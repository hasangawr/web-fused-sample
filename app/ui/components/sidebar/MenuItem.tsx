interface MenuItemProps {
  name: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, icon }) => {
  return (
    <li>
      <a href="#" className="block p-3 rounded hover:bg-gray-700">
        <div className="flex items-center">
          {icon}
          {name}
        </div>
      </a>
    </li>
  );
};

export default MenuItem;
