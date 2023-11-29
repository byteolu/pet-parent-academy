import HeroSectionWithImage from "@/components/ui/Hero-Sections/HeroSection-Img";
import KibbleAnalyzer from "@/components/ui/Dog-Health-Cards/ImgTool";
import Recipecard from "@/components/ui/Dog-Health-Cards/RecipeCard";
import RecipeBuilder from "@/components/ui/Dog-Health-Cards/RecipeToolBuilderComp";

export default async function DogHealthPage() {

    return (
        <div>
            <p> Dog Health </p>
         <HeroSectionWithImage />

         <KibbleAnalyzer />
         <Recipecard />
         <RecipeBuilder />

        </div>
    );
   }
   
   
   //
    