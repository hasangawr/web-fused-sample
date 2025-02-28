"use client";

import { useState } from "react";
import ContactDetails from "./ContactDetails";
import BasicDetails from "./BasicDetails";

const ClientInfo = () => {
  const [activeTab, setActiveTab] = useState("Contact Details");

  return (
    <div className="bg-white shadow-md rounded-lg px-6.5 pb-10.5 w-full min-w-[786] min-h-[771]">
      {/* Tabs */}
      <h2 className="text-lg font-semibold text-[#1f2d5c] mt-10.5 mb-4">
        Client Information
      </h2>
      <div className="flex border-b border-[#F0F0F0] max-w-fit mt-5">
        {["Basic Details", "Contact Details"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 pb-2.5 font-medium cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-[#3358d4] text-[#275cc7]"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Basic Details" ? <BasicDetails /> : <ContactDetails />}
    </div>
  );
};

export default ClientInfo;
