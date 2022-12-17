import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useFetchPosts } from "./controllers/use-fetch-posts";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [{ isLoading, data }] = useFetchPosts();

  return (
    <Layout>
      <section>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <>
            <h1>{pid}</h1>
            {<p>Hello {data && data.name}</p>}
          </>
        )}
      </section>
    </Layout>
  );
};

export default Post;
