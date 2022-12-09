import Head from "next/head";
import Post from "../../components/Post";
import { prisma } from "../../server/db/client";
import { useRouter } from "next/router";

export default function Code({ post }) {
  // { id, title, code, language, totalLikes, totalComments, createdAt}
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      {!post.id && (
        <div className=' text-3xl grid h-64 place-items-center'>
          {`Post not found with an id of ${router.query.id}`}
        </div>
      )}
      <Post
        post={post}
        className='px-6 my-3 mt-10'
        smallMaxWith={"max-w-2xl"}
        largeMaxWith={"max-w-7xl"}
        onComment={() => console.log("comment")}
        onLike={() => console.log("like")}
        onShare={() => console.log("share")}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  // will always run on the server
  // newest first
  const id = parseInt(context.params.id);
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}
