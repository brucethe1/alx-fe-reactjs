import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Masterpiece</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-card">
        <h2 className="hero-title">Welcome to the Future of Routing</h2>
        <p className="hero-text">
          Explore advanced React routing techniques with dynamic, nested, and protected routes, wrapped in a visually stunning experience.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
