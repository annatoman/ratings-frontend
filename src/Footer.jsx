export function Footer() {
    return (
      <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top bg-light fixed-bottom">
        <p className="col-md-4 mb-0 text-muted">© 2023 Rate My Landlord, Inc</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
        </ul>
      </footer>
        )
  }
