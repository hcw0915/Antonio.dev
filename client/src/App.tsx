import { BrowserRouter, Route, Routes } from "react-router-dom";

// import MarkdownBlog from "@/components/Markdown";
// import { Playground } from "@/components/Playground";
// import { About } from "@/pages/About";
import { Articles } from "@/pages/Articles";
// import { Blog } from "@/pages/Blog";
// import { Examples } from "@/pages/Examples";
// import { HomePage } from "@/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>

      {/* version 2  */}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<MarkdownBlog />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/playground" element={<Playground />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
