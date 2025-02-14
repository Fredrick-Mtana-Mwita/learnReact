// import hooks
import { useState } from "react";
// hello css
import "../styles/hello.css";

function Hello() {
  // const [state, setState] = useState(initialState);
  const [name, setName] = useState("mwita");
  const greetUser = () => {
    console.log("ÿou are good to go!");
  };

  const handleClick = () => {
    setName("njox");
  };

  return (
    <>
      <div className="hello">
        <h3>Welcome to react docs</h3>
        <h5>Hello {name}</h5>
        <button className="btn" onClick={handleClick}>
          Change name
        </button>
        <button className="hello-btn" onClick={greetUser}>
          get started
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          laudantium fugiat, dolor quia iure ducimus qui eius culpa magni
          delectus commodi odit provident. Eum, quasi fuga dolorem dicta ab
          ipsa.
        </p>
      </div>
    </>
  );
}

export default Hello;
