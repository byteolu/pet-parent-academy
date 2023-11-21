import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

// Example function to fetch dog food recipes
export const fetchDogFoodRecipes = async () => {
  return await prisma.dogrecipies.findMany();
};

// Example function to fetch dog training sessions
export const fetchDogTrainingSessions = async () => {
  return await prisma.exercise.findMany();
};

export default prisma;
