"use client"
import React, { useState, FormEvent } from 'react';

export default function BirthdayCakeRecipeGenerator() {
    const [userInputCondition, setUserInputCondition] = useState('');
    const [userInputCuisine, setUserInputCuisine] = useState('');
    const [recipe, setRecipe] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/birthdayRecipe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInputCondition, userInputCuisine }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setRecipe(data.recipe);
        } catch (error) {
            console.error('Fetch error:', error);
            setRecipe('Failed to fetch recipe. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Dog-Friendly Birthday Cake Recipes</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">
                        Condition
                        <input 
                            type="text" 
                            value={userInputCondition} 
                            onChange={(e) => setUserInputCondition(e.target.value)} 
                            placeholder="e.g., Gluten-free"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </label>
                </div>
                
                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2">
                        Cuisine
                        <input 
                            type="text" 
                            value={userInputCuisine} 
                            onChange={(e) => setUserInputCuisine(e.target.value)}
                            placeholder="e.g., Chicken flavored"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </label>
                </div>
                
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                >
                    {isLoading ? 'Generating Recipe...' : 'Generate Recipe'}
                </button>
            </form>
            
            {recipe && 
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Generated Recipe:</h3>
                    <p>{recipe}</p>
                </div>
            }
        </div>
    );
}
