import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
    </div>
  );
};

export default App;
