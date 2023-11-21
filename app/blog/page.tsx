import { UserProfile } from "@clerk/nextjs";
import { getSortedPostsData } from '/lib/posts.js';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


const BlogPage = () => {
    return (
        <>
       <div> Blog Page</div>
        </>
    )
}

export default BlogPage