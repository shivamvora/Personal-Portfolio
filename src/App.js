import { useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutNew from "./Components/About/";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";
import Experience from "./Components/Experience";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      {resumeData && (
        <>
          <Header data={resumeData.main} />
          <AboutNew data={resumeData.main} skills={resumeData.resume.skills} counter={resumeData.resume.counter} />
          <Experience data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      ) }
    </div>
  );
};

export default App;
