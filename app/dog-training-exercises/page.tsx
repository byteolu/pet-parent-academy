import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { PawPrint, ShoppingBag } from 'lucide-react';
import Container from "@/components/ui/container";
import { RSCDogTraining } from './components/rsc-dog-training';
import ExerciseCard from './components/ui/ExerciseCard';

export default async function DogTraining() {

 return (
     <Container>
       <div className="space-y-5 pb-10">
         <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
           <div
             style={{ backgroundImage: `url(/img/services/home-training.png)` }}
             className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
           >
           </div>
         </div>
         <div className="pt-2 pb-4 pr-4 pl-4 flex flex-col w-full sm:w-auto justify-center items-center text-center gap-y-4 flex-wrap">
           <div className="font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-2 rounded-lg">
             Start Training 
           </div>
         </div>
         
         <div className="service-card w-3/4 mx-auto p-4 shadow-sm rounded-lg text-xl">
            <ul>
              <li>
                <RSCDogTraining />

              </li>
            </ul>
           
         </div>
       </div>
     </Container>
 );
}

