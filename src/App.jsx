import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
// import { Signup } from "./Signup";
// import { Login } from "./Login";
// import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        {/* <Signup />
        <Login />
        <LogoutLink /> */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;