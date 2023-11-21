import { PrismaClient } from "@prisma/client";
import React from "react";
import { Card, CardFooter, CardContent } from "@/components/ui/card";
import { fetchDogTrainingSessions, fetchDogFoodRecipes } from '@/lib/prisma';



// change exercise to food table when created and run migration on DB

const prisma = new PrismaClient() 

export async function RSCDogFood() {
  const trainingSessions = await fetchDogTrainingSessions();
  const foodRecipes = await fetchDogFoodRecipes();

   try {
    const food = await prisma.dogrecipies.findMany();

    await prisma.$disconnect();


      
    // Each recipe is wrapped in a 'div' that serves as a card container with tailwinds utlity classes for padding(p-4) , shadow(shadow-md), and rounded corenrs (rounded-lg). 
    // The recipe name is marked up as a heading (<h2>) with a text size (text-5xl) and font weight (font-semibold) classes. 
    // Other details like our 'difficulty' , 'time' and 'ingredients' are marked up as paragraphs (<p>) with text size (text-xl) classes for consistent sizing. 
    // Instructions are italcized with a margin-top (mt-4) to seperate them from the other details. 
    // 


    return (
      <div className="mx-auto max-w-6xl mt-5">
        {food.map((recipe: Recipe) => (
          <div key={recipe.id} className="my-4 p-4 shadow-md rounded-lg">
            <h2 className="text-5xl font-semibold">{recipe.name}</h2>
            <h3 className="text-1xl font-semibold mt-4">Difficulty | Time</h3>
            <p className="text-lg">{recipe.difficulty}</p>
            <p className="text-lg">{recipe.time}</p>


            {recipe.ingredients && (
          <>
            <h3 className="text-1xl font-semibold mt-4">Ingredients</h3>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              {recipe.ingredients.split('.').map((ingredient, index) => (
                <li key={index} className="text-xl">
                  {ingredient.trim()}
                </li>
              ))}
            </ol>
          </>
        )}
        <hr className="my-4 border-gray-300" />
        <h3 className="text-1xl font-semibold mt-4">Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 mt-4">
            {recipe.instructions.split('.').map((step, index) => (
             <li key={index} className="text-xl">
             {step.trim()}
           </li>
         ))}
       </ol>
     </div>
   ))}
 </div>
);
    
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }