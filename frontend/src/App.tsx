import React, { useState } from "react";
import { Header, ProfileCard, MainContent, Footer, Resume, Projects, Hobbies, Contact } from "./components";
import "./App.css";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderMainContent = () => {
    switch (currentPage) {
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'hobbies':
        return <Hobbies />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <div className="content-wrapper">
            <ProfileCard />
            <MainContent />
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-layout">
        {renderMainContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
