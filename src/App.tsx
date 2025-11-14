import { useState } from "react";
import { NavigationBar, ProfileCard, Footer } from "./components";
import { AboutMe, Resume, Projects, Hobbies, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./global.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import SoundConsent from "./components/SoundConsent/SoundConsent";


function App() {
  const [asked, setAsked] = useState(false);
  const [play, setPlay] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const grant = () => {
    setPlay(true);   // start with sound on
    setAsked(true);
  };
  const deny = () => {
    setPlay(false);  // no audio
    setAsked(true);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <SoundConsent open={!asked} onGrant={grant} onDeny={deny} />
        <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 1000 }}>
        <AudioPlayer  src="https://yeeteing-portfolio-website.s3.us-east-2.amazonaws.com/other/In+Dreamland+by+Chillpeach.mp3"
        play={play}
        externalPause={isVideoPlaying}/>

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
            <Route path="/hobbies" element={<Hobbies onVideoPlayChange={setIsVideoPlaying} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
