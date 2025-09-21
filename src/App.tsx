import { NavigationBar, ProfileCard, Footer } from "./components";
import { AboutMe, Resume, Projects, Hobbies, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./global.css";


function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar/>
        <main className="main-layout">
          <Routes>
            <Route
              path="/"
              element={
                <div className="content-wrapper">
                  <ProfileCard />
                  <AboutMe />
                </div>
              }
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
