import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


async function main() {
    // Create exercise
    /* const exercise = await prisma.exercise.create({
        data: {
            name: 'Drop It',
            difficulty: 'Easy',
            time: "3-5 Minutes",
            instructions: '1) Offer Your dog a low-value toy2) Let your dog play with the toy. 3) Place a treat in front of your dogs nose and say Drop IT.  4) As soon as your dog drops the toy say YES. ',
            images: null,
            */
     /* const exercise = await prisma.exercise.update({
                  where: { id: 1 },
                  data: { published: true },
                })
                console.log(exercise)
              } */ 

                const exercises = await prisma.exercise.findMany({  
                })
                // loop over names of exercises 
                console.log('Names of exercises:');
                exercises.forEach((exercise) => {
                    console.log(`- Name: ${exercise.name}`);
                });

                // update data 
                // const exercise = await prisma.exercise.update ({
                    // where: { id: 1,
                // }, 
                // data: {
                    // name: 'Sit N Stay'
                // }, 
                // })
            }
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });