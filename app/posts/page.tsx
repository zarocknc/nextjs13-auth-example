
import { PrismaClient } from "@prisma/client";

export const revalidate = 3600; // revalidate every hour


export default async function Posts() {
  const prisma = new PrismaClient();
  const listPost = await prisma.post.findMany()
 
  return (
    <div>
      <ul>
        {listPost.map((hi) => (
          <li key={hi.id}>{hi.title}</li>
        ))}
      </ul>
    </div>
  );
}
