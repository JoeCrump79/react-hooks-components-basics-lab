import React from "react";

// ✅ Navbar now has a <nav> element
function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
}

// ✅ Home now has id="home"
function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

// ✅ About already had id="about" (no change needed)
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// ✅ App renders all components correctly
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
