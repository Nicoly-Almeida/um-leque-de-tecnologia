export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="NickDev — início">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-nickdeve.svg" alt="" />
        <span className="word">NickDev</span>
      </a>

      <nav className="nav">        
        <a className="link-underline" href="#sobre">
          Sobre
        </a>
        <a className="link-underline" href="#cursos">
          Cursos
        </a>
        {/* <a className="glow-btn" href="#newsletter">
          Newsletter
        </a> */}
      </nav>
    </header>
  );
}
