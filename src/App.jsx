import "./App.css";

// components
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import About from "./components/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Blog />
      <hr />
      <Footer />
    </>
  );
}

export default App;

/*
<Hello />
      <hr />
      <About />
      <hr />
 */
