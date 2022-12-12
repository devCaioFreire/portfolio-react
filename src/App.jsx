import RoutesApp from "./routes"
import Header from "./components/Header/header"
import Home from "./pages/Home/home"
import About from "./pages/About/about"
import GitHub from "./pages/GitHub/github"
import Projects from "./pages/Projects/projects"
import Contact from "./pages/Contact/contact"
import Footer from "./components/Footer/footer"
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide} />
      <Header />
      <Home />
      <About />
      <GitHub />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
