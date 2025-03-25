import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import ReactionTimer from "./ReactionTimer.tsx";
import Home from "./Home.tsx";
import Nav from "./Nav.tsx";
import Accuracy from "./Accuracy.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="" element={<Nav />}>
          <Route path="/reaction-time" element={<ReactionTimer />} />
          <Route path="/accuracy" element={<Accuracy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
