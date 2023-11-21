import prisma from "@/lib/prisma";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.exercise.findMany();
  return {
    props: { feed },
    revalidate: 10,
  };
};