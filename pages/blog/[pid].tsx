import * as React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <section>
        <h1>{pid}</h1>
      </section>
    </Layout>
  );
};

export default Post;
