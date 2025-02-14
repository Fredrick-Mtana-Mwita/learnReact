import "./App.css";

// components
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import About from "./components/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Hello />
      <hr />
      <Blog />
      <hr />
      <Profile />
      <hr />
      <About />
      <hr />
      <UserProfile />
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
