import '../components/nav.css';

const Nav = () => {
  return (
    <div>
       <div className="header">
        <h1 className="logo">Kenti Johnson<span className="green">.</span></h1>
        <ul className="nav">
          <li className="nav-item">home</li>
          <li className="nav-item">services</li>
          <li className="nav-item">resume</li>
          <li className="nav-item">work</li>
          <li className="nav-item">education</li>
          <li className="nav-item">contact</li>
          <li className="button">hire me</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
