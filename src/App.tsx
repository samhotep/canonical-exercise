import { useEffect, useState } from "react";
import "./App.scss";
import { BlogCard } from "./components";
import fetchBlogPosts from "./api";

interface WpTerms {
  id: number;
  name: string;
  taxonomy: "topic" | "category" | "careers" | "group";
}
// Interface for HTTP Object
interface BlogPost {
  id: number;
  _embedded: {
    "wp:term": Array<Array<WpTerms>>;
    author: Array<{ name: string }>;
  };
  title: { rendered: string };
  featured_media: string;
  content: string;
  link: string;
  authorUrl: string;
  date: Date;
  topic: Array<number>;
}

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts().then((response) => {
      setBlogPosts(response);
    });
  }, []);

  return (
    <div className="l-application">
      <div className="l-main">
        <div className="page-gap">
          <div className="u-fixed-width">
            <div className="row">
              {blogPosts.map((post) => {
                let topicName = "";
                post._embedded["wp:term"].forEach((_, i) => {
                  if (_.length > 0) {
                    topicName = _[0].name;
                  }
                });
                let date = new Date(post.date);
                return (
                  <div
                    className="col-medium-3 col-4 u-equal-height"
                    key={post.id}
                  >
                    <BlogCard
                      title={topicName}
                      topic={topicName}
                      imageUrl={post.featured_media}
                      contentUrl={post.link}
                      author={post._embedded.author[0].name}
                      authorUrl={post._embedded.author[0].name}
                      date={`${date.getDay()} ${date.toLocaleDateString(
                        "default",
                        {
                          month: "long",
                        }
                      )} ${date.getFullYear()}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
