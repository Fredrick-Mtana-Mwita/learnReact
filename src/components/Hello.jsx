// hello css
import "../styles/hello.css";

function Hello() {
  const greetUser = () => {
    console.log("ÿou are good to go!");
  };

  return (
    <>
      <div className="hello">
        <h3>Welcome to react docs</h3>
        {/* don't call function inside greetUser() */}
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
