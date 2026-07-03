
import { HashRouter, BrowserRouter  } from "react-router-dom";

import{ About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';




const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <StarsCanvas />
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
