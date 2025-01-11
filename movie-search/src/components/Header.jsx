import "./Header.css";
export function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#movies">Filme</a>
            </li>
            <li>
              <a href="#series">Serien</a>
            </li>
            <li>
              <a href="#people">Personen</a>
            </li>
            <li>
              <a href="#more">Mehr</a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <span className="language">DE</span>
          <i className="fas fa-search search-icon"></i>
          <i className="fas fa-plus-circle add-icon"></i>
        </div>
      </header>
      <img src="https://cdn.pixabay.com/photo/2020/06/07/20/49/filmstrip-5272092_1280.jpg"></img>
    </>
  );
}
export default Header;
