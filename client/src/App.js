import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AboutPage, ContactPage, EducationPage, HomePage, ServicesPage} from "./pages";
import CatchAllPage from "./pages/404"
import { Header, Wrapper } from "./components"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"
import BlogPage from "./pages/BlogPage";

function App() {


  
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <div className="pt-3 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element= {<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="*" element={<CatchAllPage />} />
          </Routes>
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
