import React, { useState } from "react";
import { Header, ProfileCard, MainContent, Footer, Resume, Projects, Hobbies, Contact } from "./components";
import "./App.css";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('projects');

  const renderMainContent = () => {
    switch (currentPage) {
      case 'resume':
        return <Resume onPageChange={setCurrentPage} />;
      case 'projects':
        return <Projects onPageChange={setCurrentPage} />;
      case 'hobbies':
        return <Hobbies onPageChange={setCurrentPage} />;
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
