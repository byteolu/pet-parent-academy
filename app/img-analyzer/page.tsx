"use client"
import Container from "@/components/ui/container";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import ImgToTreatComponent from "@/components/img-to-treat";



export default function Home() {
  return (
    <Container>
       <Header />
      <div className="space-y-5 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/services/hero-img.png)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
          </div>
        </div>
        <div className="pt-2 pb-4 pr-4 pl-4 flex flex-col w-full sm:w-auto justify-center items-center text-center gap-y-4 flex-wrap">
              <div className="font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-2 rounded-lg">
              Turn Photos Into Yummy Dog Treats 
              </div>
            </div>
            <div className="service-card w-full sm:w-3/4 mx-auto p-4 md:p-6 lg:p-8 shadow-md rounded-lg text-xl hover:shadow-lg transition-shadow duration-300">
              <ImgToTreatComponent />
            </div>

              </div>
    </Container>
  );
}//
// removed button 