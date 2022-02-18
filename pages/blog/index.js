import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

const Index = ({ posts }) => {
  return (
    <>
      <header className="page-header">
        <div className="container text-center text-white">
          <h1 className="fw-bold display-3 my-3">DeceNode Blog</h1>
          <p className="lead">Stay updated with us</p>
        </div>
      </header>
      <main>
        <section id="blog-section">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 my-3">
              {posts.map(
                ({
                  frontmatter: {
                    title,
                    description,
                    author,
                    date,
                    cover_image,
                  },
                  slug,
                }) => (
                  <div className="col" key={slug}>
                    <div className="card">
                      <Image
                        src={cover_image}
                        alt="purple sky with star depicting"
                        width={1920}
                        height={1080}
                        objectFit="cover"
                        quality={90}
                      />
                      <div className="card-body">
                        <h2 className="fw-bold">
                          <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                            <a className="text-decoration-none">{title}</a>
                          </Link>
                        </h2>
                        <p className="card-text text-muted">{description}</p>
                        <p className="card-subtitle text-muted mb-0">
                          Written by <span className="text-dark">{author}</span>{" "}
                          on {date}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
