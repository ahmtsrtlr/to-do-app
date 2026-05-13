interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export const MetricCard = ({ title, value, description }: MetricCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {description && (
          <span className="ml-2 text-sm text-green-600">{description}</span>
        )}
      </div>
    </div>
  );
};
