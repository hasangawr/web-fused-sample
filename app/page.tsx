import Image from "next/image";
import Sidebar from "./ui/components/sidebar/Sidebar";
import Navbar from "./ui/components/Navbar";
import Profile from "./ui/components/profile/Profile";
import ClientInfo from "./ui/components/clientinfo/ClientInfo";
import Breadcrumb from "./ui/components/Breadcrumb";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-[1150] pl-9 pr-9">
        <Navbar />
        <Breadcrumb />
        {/* Page Content */}
        <div className="flex gap-4 mt-4 mb-10.5">
          <Profile />
          <ClientInfo />
        </div>
      </div>
    </div>
  );
}
