import Container  from "@/components/ui/container";
import DogCakeRecipeGenerator from '@/components/DogCakeRecipeGen';



export default function Home() {
  return (
    <Container>
      <div className="space-y-5 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/services/pup-treat.png)` }}
            className="rounded-lg relative aspect-square md:aspect-[8.4/6] overflow-hidden bg-cover"
          >
          </div>
        </div>
        <div className="pt-2 pb-4 pr-4 pl-4 flex flex-col w-full sm:w-auto justify-center items-center text-center gap-y-4 flex-wrap">
              <div className="font-bold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-2 rounded-lg">
                Suprise Your Pup!
                
              </div>
            </div>
          <div className="service-card w-3/4 mx-auto p-4 shadow-sm rounded-lg text-xl">
       
            <DogCakeRecipeGenerator />
              </div>
              </div>
    </Container>
  );
}

// 
