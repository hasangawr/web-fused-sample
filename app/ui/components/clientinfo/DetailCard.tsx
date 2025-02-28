import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface DetailCardProps {
  status: "Active" | "Inactive";
  title: string;
  icon: React.ReactNode;
  secondIcon?: React.ReactNode;
  details: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  status,
  title,
  icon,
  secondIcon,
  details,
}) => {
  return (
    <div className="border border-[#eaecf0] rounded-lg p-4 flex flex-col gap-2 relative max-w-[352]">
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full absolute top-2 left-2 ${
          status === "Active"
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {status}
      </span>
      <div className="flex items-center gap-2 mt-5">
        {icon}
        <h4 className="text-[#275cc7] font-semibold text-sm">{title}</h4>
        <button className="ml-auto text-gray-500 hover:text-blue-600">
          <PencilSquareIcon className="w-5 h-5 text-[#275cc7]" />
        </button>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {secondIcon}
        <p className="text-sm text-gray-600">{details}</p>
      </div>
    </div>
  );
};

export default DetailCard;
