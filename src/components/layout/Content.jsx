import "./Content.css";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import { Routes, Route } from "react-router-dom";
const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </main>
);
export default Content;
