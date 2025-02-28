import BasicDetailsField from "./BasicDetailsField";

const fieldsData = [
  { title: "First Name", value: "Chathunima" },
  { title: "Middle Name", value: "Ranjayasiri" },
  { title: "Last Name", value: "Perera" },
  { title: "Date Of Birth", value: "20/04/1969" },
  { title: "Gender", value: "Male" },
  { title: "Office", value: "Bambalapitiya" },
  { title: "BRN", value: "Munasinhe" },
  { title: "Savings Account", value: "0236985" },
  { title: "Submitted on", value: "12/01/2025" },
];

const BasicDetails = () => {
  return (
    <div className="bg-white p-6 rounded-xl min-w-max">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 mt-6 text-sm text-gray-700">
        {fieldsData.map((fieldData, index) => (
          <BasicDetailsField
            key={index}
            title={fieldData.title}
            value={fieldData.value}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicDetails;
