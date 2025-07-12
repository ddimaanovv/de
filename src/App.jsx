import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import "./App.css";

const BASE =
  "https://raw.githubusercontent.com/halltape/HalltapeRoadmapDE/main/";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/halltape/HalltapeRoadmapDE/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Markdown
      children={content}
      remarkPlugins={[[remarkGfm]]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      remarkRehypeOptions={{ passThrough: ["link"] }}
      components={{
        a: ({ href, children, ...props }) => {
          let url = href;
          if (href && !/^(https?:\/\/|mailto:|#)/.test(href)) {
            url = new URL(href, BASE).toString();
          }
          return (
            <a href={url} {...props}>
              {children}
            </a>
          );
        },
        img: ({ src, alt, ...props }) => {
          let url = src;
          if (src && !/^(https?:\/\/|data:)/.test(src)) {
            url = new URL(src, BASE).toString();
          }
          return <img src={url} alt={alt} {...props} />;
        },
      }}
    ></Markdown>
  );
}

export default App;
