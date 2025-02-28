import {
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import DetailCard from "./DetailCard";
import Image from "next/image";

const ContactDetails = () => {
  return (
    <div className="w-max">
      {/* Add New Button */}
      <div className="flex justify-end items-center mt-4">
        <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold cursor-pointer">
          <PlusIcon className="w-5 h-5" />
          Add New
        </button>
      </div>

      {/* Map */}
      <div className="mt-2">
        <p className="text-[#1f2d5c] text-sm">Pin map</p>
        <div className="mt-6 h-40">
          <img src="/map.png" alt="Map Placeholder" className="w-full h-full" />
        </div>
      </div>

      {/* Address & Contact Details */}
      <div className="mt-7">
        <h3 className="text-lg font-medium">Address Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          <DetailCard
            status="Active"
            title="Primary Address"
            icon={<HomeIcon className="w-5 h-5 text-blue-600" />}
            secondIcon={<MapPinIcon className="w-5 h-5 text-[#275cc7]" />}
            details="85/1, Hanwalla, Pahatgama, Avissawella. 10522"
          />
          <DetailCard
            status="Inactive"
            title="Secondary Address"
            icon={<HomeIcon className="w-5 h-5 text-blue-600" />}
            secondIcon={<MapPinIcon className="w-5 h-5 text-[#275cc7]" />}
            details="85/1, Hanwalla, Pahatgama, Avissawella. 10522"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <DetailCard
            status="Active"
            title="Primary Phone Number"
            icon={<PhoneIcon className="w-5 h-5 text-blue-600" />}
            details="+94 756932398"
          />
          <DetailCard
            status="Inactive"
            title="Secondary Phone Number"
            icon={<PhoneIcon className="w-5 h-5 text-blue-600" />}
            details="+94 772369863"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
