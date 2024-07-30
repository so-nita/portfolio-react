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
      <Header />
      <main className="lg:pt-32 md:pt-24 pt-20 h-dvh">
        {!finishedLoading && <Startup />}
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

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


