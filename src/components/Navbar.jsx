// navbar css
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Logo</h2>
        <div className="nav-items">
          <ul className="ul-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
