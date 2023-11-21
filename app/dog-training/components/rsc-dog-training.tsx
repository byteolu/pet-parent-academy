import { PrismaClient } from "@prisma/client";
import React from "react";
import { Card } from "@/components/ui/card";
import { fetchDogTrainingSessions } from '@/lib/prisma';

// Fetching and displaying dog training exercises from Prisma DB. 

const prisma = new PrismaClient() 

export async function RSCDogTraining() {
  const trainingSessions = await fetchDogTrainingSessions();
  

   try {
    const exercises = await prisma.exercise.findMany();
    
    await prisma.$disconnect();
// Key is place on React.Framework which is the top-level element in each iteration of the map
// Each exercise data is wrapped in a single 'Card' Component, with details placed within the card. 


return (
  <Card>
  <main className="mx-auto max-w-6xl">
    {exercises.map((exercise) => (
      <div key={exercise.id} className="my-4 p-4 shadow-md rounded-lg">
        <h2 className="font-semibold text-5xl">{exercise.name}</h2>
        {exercise.instructions && (
          <ol className="list-decimal list-inside space-y-2 ml-4 mt-4 italic">
            {exercise.instructions.split('.').map((step, index) => (
              <li key={index} className="text-lg">
                {step.trim()}
              </li>
            ))}
          </ol>
        )}
      </div>
    ))}
  </main>
</Card>

);

    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }