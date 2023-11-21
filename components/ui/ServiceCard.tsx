import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Service } from "@/types";


interface ServiceCard {
  data: Service;
}

const ServiceCard: React.FC<ServiceCard> = ({ data }) => {
  // Initialize route to the default value 
  let route = '/';
// Based on service name, determine the corrrect route 
if (data.name === 'Train Your Dog Online') {
  route = '/dog-training';
} else if (data.name === 'Free Dog Food') {
  route = '/dog-food';
} else if (data.name === 'Custom Dog-Friendly Meals') {
  route = '/recipe-builder'; // Ensure this page exists
} else if (data.name === 'Turn Photos into Dog Treats') {
  route = '/img-analyzer'; // Ensure this page exists
}

// 

  return (
      <Link href={route} className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
        <Card className="rounded-lg border-2">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <Image
                src={data.images?.[0]}
                alt=""
                fill
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">{data.name}</p>
            </div>
            <div className="flex items-center justify-between text-primary/80">{data?.price}</div>
            <div className="flex items-center justify-between">{data?.description}</div>
          </CardFooter>
        </Card>
      </Link>
  );
};

export default ServiceCard;