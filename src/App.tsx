import { useState } from "react";
import { NavigationBar, ProfileCard, Footer } from "./components";
import { AboutMe, Resume, Projects, Hobbies, Contact } from "./pages";

import "./App.css";
import "./global.css";

type PageType = 'home' | 'resume' | 'projects' | 'hobbies' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('hobbies');

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
            <AboutMe />
          </div>
        );
    }
  };

  return (
    <div className="app">
      <NavigationBar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-layout">
        {renderMainContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
