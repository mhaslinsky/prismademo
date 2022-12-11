import { prisma } from "../server/db/client";
import PostSmall from "../components/PostSmall";
import Button from "../components/Button";
import { useRouter } from "next/router";

async function prismaTest() {}

export default function Home({ posts, usertest }) {
  const router = useRouter();

  console.log(usertest);

  return (
    <>
      <div className='pt-8 pb-10 lg:pt-12 lg:pb-14 mx-auto max-w-7xl px-2'>
        <div className='max-w-2xl mx-auto'>
          <Button onClick={() => router.push("/addPost")}>Create A Snippet</Button>

          <ul className='mt-8'>
            {posts?.map((post) => (
              <li key={post.id}>
                <PostSmall
                  post={post}
                  href={`/code/${post.id}`}
                  className='my-10'
                  onLike={() => console.log("like post", post.id)}
                  onComment={() => console.log("comment post", post.id)}
                  onShare={() => console.log("share post", post.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // await prisma.user.deleteMany();
  const usertest = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@gmail.com",
      userPreferences: { create: { theme: "dark" } },
    },
    include: { userPreferences: true },
  });

  // will always run on the server
  // newest first
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    props: {
      usertest: JSON.parse(JSON.stringify(usertest)),
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
