import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

// Import the generated Exercise type
import { Exercise } from '@prisma/client';

const ExerciseCard: React.FC<{ exercise: Exercise }> = ({ exercise }) => {
  return (
    <div className="service-card w-3/4 mx-auto p-4 shadow-sm rounded-lg text-xl">
      <div className="font-semibold text-2xl">{exercise.name}</div>
      <div className="ml-5 mt-2 italic">{exercise.instructions}</div>
    </div>
  );
};

export default ExerciseCard;
