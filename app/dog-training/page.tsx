import HeroSection from "@/components/ui/Hero-Sections/HeroSection-CTA-blog";
import ProductCard from "@/components/ui/Dog-Training-Cards/ExerciseCard";
import DogTraining from "../dog-training-exercises/page";
import TrainingPlanCard from "@/components/ui/Dog-Training-Cards/TrainingPlanCard";
import ExerciseCard from "@/components/ui/Dog-Training-Cards/ExerciseCard";
import ExerciseCardComp from "@/components/ui/Dog-Training-Cards/ExerciseCard";
import HeroSectionDogTraining from "@/components/ui/Hero-Sections/HeroSection-Img-training";



export default async function DogTrainingPage() {

 

 return (
     <div>
    <p>Dog training pages</p>

      <HeroSectionDogTraining />

    
    
     <TrainingPlanCard /> 
     <ExerciseCardComp />

     </div>
 );
}

 