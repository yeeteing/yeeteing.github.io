import { NavigationBar, ProfileCard, Footer } from "./components";
import { AboutMe, Resume, Projects, Hobbies, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./global.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";


function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 1000 }}>
        <AudioPlayer />
      </div>
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
