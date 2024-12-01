import { Helmet } from "react-helmet";

import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import BeyondWork from "./components/BeyondWork/BeyondWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Farooq Mohammad Mulla | Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Farooq Mohammad Mulla - Software Engineer proficient in Java, Spring Boot, React.js, and distributed systems."
        />
        <meta
          property="og:title"
          content="Farooq Mohammad Mulla | Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my portfolio showcasing skills in Java, Spring Boot, React.js, and scalable software development projects."
        />
        <meta
          property="og:image"
          content="/Assets/Images/profileImage.jpg"
        />
        <meta property="og:url" content="https://farooqmulla.me/" />
      </Helmet>
      <div className="h-screen overflow-y-scroll snap-y snap-proximity">
        <div className="snap-start">
          <Header />
        </div>
        <div id="projects" className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <Skills />
        </div>
        <div className="snap-start">
          <Experience />
        </div>
        <div className="snap-start">
          <BeyondWork />
        </div>
        <div id="contact" className="snap-start">
          <Contact />
        </div>
        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
