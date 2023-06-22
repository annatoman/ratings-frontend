import Logo from "./assets/logo.svg";

export function Header() {
  return (
    <header>
      <nav className="navbar bg-light">
        <img src={Logo} alt="Logo" width="100"/>
        <div style={{marginRight: '20px'}}>
          <button className="btn" type="button">Login</button>
          <button className="btn btn-secondary" type="button" style={{borderRadius: '16px'}}>Signup</button>
        </div>
      </nav>
    </header>
  )
}