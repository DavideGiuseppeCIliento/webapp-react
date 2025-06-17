// # IMPORT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # IMPORT  LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// # IMPORT PAGE
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
