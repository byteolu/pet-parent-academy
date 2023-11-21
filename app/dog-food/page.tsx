import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { PawPrint, ShoppingBag } from 'lucide-react';
import Container from "@/components/ui/container";
import { RSCDogFood } from './components/rsc-dog-food';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';

export default async function DogTraining() {



 return (
     <Container>
      <Header />
       <div className="space-y-5 pb-10">
       <div className="p-8 sm:p-36 lg:p-48 rounded-lg overflow-hidden bg-no-repeat bg-center mt-2" 
     style={{ backgroundImage: `url(/img/services/dog-food.png)`, backgroundSize: '50%' }}>
        </div>


         <div className="pt-2 pb-4 pr-4 pl-4 flex flex-col w-full sm:w-auto justify-center items-center text-center gap-y-4 flex-wrap">
           <div className="font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-2 rounded-lg mb-4 ">
             Hungry Pup ?  
             <Button size="lg" className="w-full py-4 text-lg mb-4 mt-4">
               <PawPrint className="mr-2" />
               Talk To A Dog Foodie AI Bot
             </Button>
           </div>
         </div>
         <Card className="w-3/4 mx-auto p-4 shadow-sm rounded-lg text-xl">
              
                <RSCDogFood />
              
            
           
         </Card>
       </div>
     </Container>
 );
}


//
 // <Button size="lg" className="w-full py-4 text-lg">
    //            <PawPrint className="mr-2" />
       //        Recipe Builder
          //    </Button>