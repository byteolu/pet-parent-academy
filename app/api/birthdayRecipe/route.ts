import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
    const { userInputCondition, userInputCuisine } = await request.json();

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            max_tokens: 500,
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that generates dog-friendly birthday cake recipes."
                },
                {
                    role: "user",
                    content: `Generate a birthday cake recipe. Condition: ${userInputCondition}. Cuisine: ${userInputCuisine}.`
                }
            ]
        });

        // Parse the JSON response from the OpenAI API
        const data = await response.json();

        return new Response(JSON.stringify({ recipe: data.choices[0].message.content }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to generate recipe' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
