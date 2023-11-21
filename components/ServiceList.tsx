import ServiceCard from "@/components/ui/ServiceCard";
import { Service } from "@/types";

interface ServiceListProps {
  items: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {items.map((item) => (
          <ServiceCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;