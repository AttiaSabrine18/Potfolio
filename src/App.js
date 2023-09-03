import "./App.css";
import NavBar  from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About  from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact"
import Skills from "./components/skills/Skills";
function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Home />
        <About/>
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
