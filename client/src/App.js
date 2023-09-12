import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AboutPage, HomePage} from "./pages";
import CatchAllPage from "./pages/404"
import { Header, Wrapper } from "./components"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

function App() {


  
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <div className="pt-3 px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/:id?" element={<AboutPage />} />
            <Route path="*" element={<CatchAllPage />} />
          </Routes>
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
