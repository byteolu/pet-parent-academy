import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { PawPrint, ShoppingBag } from 'lucide-react';
import ServiceList from '@/components/ServiceList';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import HomeHeroSectionImage from '@/components/ui/Hero-Sections/HomeHero-Sec';


const services = [
  {
    id: "1",
    category: "Dog Trainer",
    name: "Train Your Dog Online",
    price: "Paid",
    description:"Personalized online training sessions to teach your dog new tricks from the comfort of your home.",
    images: ["/img/services/training-golden.png"],
  },
  {
    id: "3",
    category: "Dog Foodie",
    name: "Free Dog Food",
    price: "Free",
    description:"Delicous, meals you can make for your furry friend, for a balanced diet.",
    images: ["/img/services/dog-safe-food.png"],
  },
  {
    id: "4",
    category: "Dog Foodie",
    name: "Custom Dog-Friendly Meals",
    price: "Paid",
    description:"Create custom meal plans for your dog with our interactive recipe builder tailored to your dog's nutritional needs.",
    images: ["/img/services/recipe-tool.png"],
  },
  {
    id: "5",
    category: "Photo",
    name: "Turn Photos into Dog Treats",
    price: "Free",
    description:"Transform your pet's favorite images into custom-designed treats they will love",
    images: ["/img/services/img-to-treat.png"],
  },


];


export default function Home() {
  return (
<div>     
      <HomeHeroSectionImage />
    
          <div className="service-card w-3/4 mx-auto p-4 shadow-sm rounded-lg text-xl">
          <ServiceList items={services} />
          
              </div>
              </div>

  );
}

// 
