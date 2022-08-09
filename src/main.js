import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import AddPorfolio from "./components/_PRIVATE/AddPorfolio";
import AddTestimonial from "./components/_PRIVATE/AddTestimonial";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="portfolio" element={<AddPorfolio/>} />
      <Route path="testimonial" element={<AddTestimonial />} />
    </Routes>
  </BrowserRouter>
);