import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Blog = ({ content, frontmatter }) => {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <div className="text-center text-light py-5">
            <span className="mb-0">{frontmatter.date}</span>
            <div className="my-5">
              <h1 className="fw-bold display-3 my-3">{frontmatter.title}</h1>
              <p className="fst-italic">
              &quot;{frontmatter.description}&quot;
              </p>
            </div>
            <div className="d-flex flex align-items-center justify-content-center">
              <Image
                src={frontmatter.author_image}
                width={50}
                height={50}
                alt={frontmatter.author}
                quality={90}
                objectFit="cover"
                className="rounded-circle"
              />
              <span className="mb-0 mx-2">{frontmatter.author}</span>
            </div>
          </div>
        </div>
      </header>
      <article>
        <div className="container">
          <div className="my-5">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data.date.toLocaleDateString("en-US", options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: content,
      frontmatter,
    },
  };
}

export default Blog;
