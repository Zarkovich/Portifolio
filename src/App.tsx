import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import About from "./pages/About/About";
import { GetRepositoris } from "./Service/GetStatusLenguage";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    GetRepositoris();
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
    </div>
  );
};

export default App;
