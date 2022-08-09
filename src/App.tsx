import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projetos from "./pages/Projetos/Projetos";
import Contato from "./pages/Contato/Contato";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className='App'>
            <NavBar />
            <Header />
            <About />
            <Skills />
            <Projetos />
            <Contato />
            <Footer />
        </div>
    );
};

export default App;
