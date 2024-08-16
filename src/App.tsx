import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Content from './components/content';
import './App.css';
import Startup from './components/startup/startup-logo';
import Footer from './components/footer/footer';
import AOS from 'aos';
import AboutMe from "./components/about/about";
import Transition from './components/transition';
import Experience from './components/experience/experience';
// import Hero from './test/Hero';
// import { ScrollProvider } from './test/Providers/ScrollProvider';

function App() {
  const [finishedLoading, setFinishedLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFinishedLoading(true);
    }, 5400);
  });

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="main-container">
      {!finishedLoading && <Startup />}
      { finishedLoading && (
        <Header />
      )}
      <main className="lg:pt-32 md:pt-24 pt-20 h-dvh">
        {finishedLoading && (
          <>
            <Transition />
            <div className="content-area">
              <Content />
              <AboutMe />
              <Experience />
              <Footer />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

// function App() {
//   return (
//     <ScrollProvider>
//       <Hero />
//     </ScrollProvider>
//   );
// };


export default App;


