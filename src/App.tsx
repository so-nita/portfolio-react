import React from 'react';
// import logo from './logo.svg';
import Header from './components/header/header';
import Content from './components/content';
import './App.css';


function App() {
  return (
    <main className="min-h-screen flex justify-center p-5 items-center">
      <Header />
      <Content />
    </main>
    
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


