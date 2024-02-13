export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <img src="/assets/pokeball.png" alt="A pokeball"></img>
        <h1>Pokedex</h1>
      </div>
      <div className="nav-links">
        <button className="nav-btn">About</button>
        <button className="nav-btn">Random</button>
        <button className="nav-btn">Home</button>
      </div>
    </div>
  );
}
