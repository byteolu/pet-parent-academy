import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { PawPrint, ShoppingBag } from 'lucide-react';
import Container  from "@/components/ui/container";
import  Header from "@/components/Header";
import ServiceList from '@/components/ServiceList';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import DogCakeRecipeGenerator from '@/components/DogCakeRecipeGen';


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
    <Container>
       <Header />
       <UserButton />
      <div className="space-y-5 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/services/hero-img.png)` }}
            className="rounded-lg relative aspect-square md:aspect-[8.4/6] overflow-hidden bg-cover"
          >
          </div>
        </div>
        <div className="pt-2 pb-4 pr-4 pl-4 flex flex-col w-full sm:w-auto justify-center items-center text-center gap-y-4 flex-wrap">
              <div className="font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-2 rounded-lg">
              Discover Healthy Dog Recipes
                <Button size="lg" className="w-full py-4 text-lg">
                  <PawPrint className="mr-2" />
                  Get Recipes
                </Button>
              </div>
            </div>
          <div className="service-card w-3/4 mx-auto p-4 shadow-sm rounded-lg text-xl">
          <ServiceList items={services} />
          
              </div>
              </div>
    </Container>
  );
}

// 
