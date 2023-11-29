import HeroSection from "@/components/ui/Hero-Sections/HeroSection-CTA";
import ProductCard from "@/components/ui/Dog-Training-Cards/ExerciseCard";
import DogTraining from "../dog-training-exercises/page";
import TrainingPlanCard from "@/components/ui/Dog-Training-Cards/TrainingPlanCard";
import ExerciseCard from "@/components/ui/Dog-Training-Cards/ExerciseCard";
import ExerciseCardComp from "@/components/ui/Dog-Training-Cards/ExerciseCard";



export default async function DogTrainingPage() {

 

 return (
     <div>
    <p>Dog training pages</p>

      <HeroSection />

    
    
     <TrainingPlanCard /> 
     <ExerciseCardComp />

     </div>
 );
}

 