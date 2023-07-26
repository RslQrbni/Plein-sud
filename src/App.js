
import './App.css';
import Nav from './components/Nav';
import Body from './body/body';
import Footer from './footer/footer';
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {
  return (
    <div className="App">
      <Nav/>
      <Body/>
      <Footer/>

    </div>
  );
}

export default App;
