import RoutesApp from "./routes"
import Header from "./components/Header/header"
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import GitHub from "./pages/GitHub/github"
import Projects from "./pages/Projects/projects"

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <GitHub />
      <Projects />
    </>
  )
}

export default App
