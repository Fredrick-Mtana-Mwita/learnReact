// blog.css
import "../styles/blog.css";

// impression
import Impression from "../components/Impression";

function Blog() {
  const likes = 23;
  const comments = 40;
  const shares = 50;
  const stats = 40.0;

  const author = "Mwita Fredrick";
  let blog = {
    author: "Mwita Fredrick",
    title: "React.js instalation",
    body: " Getting Started with React.js React.js is one of the most popular JavaScript libraries for building user interfaces, particularly for single-page applications. Developed by Facebook, React allows developers to create reusable UI components and manage application state efficiently. Why Choose React? Component-Based Architecture",
  };

  return (
    <>
      <div className="blogs">
        <h4>Blogs</h4>
        <div>
          <div>
            <h3>Getting started with react.js</h3>
            <p>
              Getting Started with React.js React.js is one of the most popular
              JavaScript libraries for building user interfaces, particularly
              for single-page applications. Developed by Facebook, React allows
              developers to create reusable UI components and manage application
              state efficiently. Why Choose React? Component-Based Architecture
              – Build encapsulated components that manage their own state and
              compose them to make complex UIs. Virtual DOM – Improves
              performance by updating only the necessary parts of the actual
              DOM. Declarative UI – React makes it easy to design interactive
              and dynamic user interfaces. Strong Community Support – React has
              a vast ecosystem with extensive documentation and third-party
              libraries. Setting Up React To start using React, you need to have
              Node.js installed on your system. If you haven’t installed it yet,
              download it from Node.js. Step 1: Create a New React App The
              easiest way to create a React project is by using Create React
              App: recat is being used by {stats}.0%
              <code>
                npx create-react-app my-app <br /> cd my-app npm start
              </code>
            </p>
            <div className="author">
              Written By <small>{author}</small>
            </div>
            <Impression />
          </div>
        </div>
        <div className="blogs">
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <p>
            Written by{" "}
            <a href="#">
              <small>{blog.author}</small>
            </a>
          </p>
          <Impression />
        </div>
      </div>
    </>
  );
}

export default Blog;
