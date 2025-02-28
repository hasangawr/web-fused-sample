"use client";

import {
  ClipboardIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  EllipsisVerticalIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import MenuItem from "./MenuItem";

const Profile = () => {
  const [active, setActive] = useState("Loans");

  const menuItems = [
    {
      name: "Client Information",
      icon: <UserIcon className="w-5 h-5" />,
    },
    { name: "Documents", icon: <DocumentIcon className="w-5 h-5" /> },
    { name: "Other Details", icon: <ClipboardIcon className="w-5 h-5" /> },
  ];

  const financeItems = [
    { name: "Loans", icon: <CurrencyDollarIcon className="w-5 h-5" /> },
    { name: "Upcoming Charges", icon: <DocumentIcon className="w-5 h-5" /> },
    { name: "Savings Accounts", icon: <ClipboardIcon className="w-5 h-5" /> },
  ];

  const contactItems = [
    { name: "Contact Information", icon: <PhoneIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="w-69 shrink-0 bg-white shadow-md pt-7.5 pl-5.5 pr-5.5 rounded-[8px]">
      {/* Profile Section */}
      <div className="flex flex-col items-center relative">
        <img
          src="https://i.pravatar.cc/100?img=59"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <h2 className="mt-3 text-[#3A3F63] font-semibold text-lg">
          Sahan Dilshan
        </h2>
        <p className="text-[#5A607F] font-light text-sm">
          Last update 12-11-2020
        </p>
        <button className="absolute top-[-14] right-[-6] z-10 p-1 text-gray-600 bg-[#F4F7FF] hover:text-gray-900 cursor-pointer">
          <EllipsisVerticalIcon className="w-6 h-6" />
        </button>
      </div>

      <hr className="mt-4 text-[#F0F0F0]" />

      {/* Menu Items */}
      <nav className="mt-4 space-y-3">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            active={active}
            setActive={setActive}
          />
        ))}

        <hr className="mt-4 text-[#F0F0F0]" />

        {financeItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            active={active}
            setActive={setActive}
          />
        ))}

        <hr className="mt-4 text-[#F0F0F0]" />

        {contactItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            active={active}
            setActive={setActive}
          />
        ))}
      </nav>
    </div>
  );
};

export default Profile;
