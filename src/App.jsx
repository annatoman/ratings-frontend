import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Signup />
      <Login />
      <LogoutLink />
    </div>
  )
}

export default App;