import "./App.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import "./styles.css";
import About from "./Components/About";
import Home from "./Components/Home";


function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/About":
      Component = <About />;
      break;
    case "/Home":
      Component = <Home />;
      break;
    case "/Contact":
      Component = <Contact />;
      break;
    default:
  }
  return (
    <>
      <Header />
      {Component}
    </>
  );
}

export default App;
