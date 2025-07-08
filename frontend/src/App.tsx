import React from "react";
import { Header, ProfileCard, MainContent, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-layout">
        <div className="content-wrapper">
          <ProfileCard />
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
