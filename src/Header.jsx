import Logo from "./assets/logo.svg";

export function Header() {
  return (
    <header>
      <nav className="navbar bg-light">
        <form className="container-fluid justify-right-content-start">
        <img src={Logo} alt="Logo" width="200"/>
          <button className="btn btn-sm btn-outline-secondary" type="button">Signup</button>
          <button className="btn btn-sm btn-outline-secondary" type="button">Login</button>
        </form>
      </nav>
    </header>
  )
}