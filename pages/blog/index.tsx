import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import { Grid, ThumbnailImage } from "./styled";

type Post = {
  id: string;
  name: string;
  url: string;
  image: string;
};

const listOfIdeas = [
  "Getting started with HTML",
  "Intro to CSS Styling your website",
  "JavaScript for beginners",
  "Building a responsive website",
  "Creating a website with a frontend framework",
  "Using Git for version control",
  "Building a website with a CMS",
  "Deploying your website to a web server",
  "Cross-browser compatibility tips",
  "Advanced web development techniques",
];

export default function Blog() {
  const posts: Post[] = listOfIdeas.map((idea, index) => {
    const url = `/blog/${idea.toLowerCase().replaceAll(" ", "-")}`;
    return {
      url,
      id: `id-${index}`,
      name: idea,
      image: `https://loremflickr.com/320/24${index}`,
    };
  });
  console.log("posts", posts);
  return (
    <>
      <Head>
        <title>androobay | blog2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <h1>Blog</h1>
          <Grid>
            {posts.map(({ id, url, name, image }) => {
              return (
                <div key={id}>
                  <Link href={url}>
                    <ThumbnailImage
                      src={image}
                      width={320}
                      height={240}
                      alt="placeholder"
                    />
                    {name}
                  </Link>
                </div>
              );
            })}
          </Grid>
        </section>
      </Layout>
    </>
  );
}