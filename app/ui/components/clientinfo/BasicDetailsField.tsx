interface BasicDetailsFieldProps {
  title: string;
  value: string;
}

const BasicDetailsField: React.FC<BasicDetailsFieldProps> = ({
  title,
  value,
}) => {
  return (
    <div>
      <p className="text-gray-500">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default BasicDetailsField;
