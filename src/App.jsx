import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { slugify } from "./utils/slugify";

const BASE =
  "https://raw.githubusercontent.com/halltape/HalltapeRoadmapDE/main/";

function App() {
  const [content, setContent] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/halltape/HalltapeRoadmapDE/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => {
        const tree = slugify(text);
        setMenu(tree);
        setContent(text);
      });
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start", // чтобы sidebar и main стартовали по верхней границе
        }}
      >
        <Sidebar toc={menu} />
        <main
          style={{
            flex: 1,
            padding: "1rem",
          }}
        >
          <Markdown
            children={content}
            remarkPlugins={[[remarkGfm]]}
            rehypePlugins={[rehypeRaw, rehypeSlug]}
            remarkRehypeOptions={{ passThrough: ["link"] }}
            components={{
              img: ({ src, alt, ...props }) => {
                let url = src;
                if (src && !/^(https?:\/\/|data:)/.test(src)) {
                  url = new URL(src, BASE).toString();
                }
                return <img src={url} alt={alt} {...props} />;
              },
            }}
          ></Markdown>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
