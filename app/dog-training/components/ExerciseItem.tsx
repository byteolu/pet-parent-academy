"use client"
import { Exercise } from "@prisma/client";
import React from "react";

type ExerciseItemProps = {
    exercise: Exercise
}

const ExerciseItem = ({ exercise}: { exercise: Exercise}) => {
    return <li>{exercise.name}
    
    </li>
}

export default ExerciseItem