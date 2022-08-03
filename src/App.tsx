import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import ilustraton from "./assets/Img/imagemSobrefundo.svg";

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <div className='About'>
        <div className='About__Description'>
          <p>DESENVOLVEDOR FULL-STACK</p>
          <h1>Gustavo Vieira</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus magnam est eum soluta quisquam. Quibusdam,
            consectetur! Consequatur architecto est veritatis.
          </p>
          <button>BAIXAR CURRÍCULO</button>
        </div>
        <div className='About__Image'>
          <img src={ilustraton} alt='imagem' />
        </div>
      </div>
    </div>
  );
};

export default App;
