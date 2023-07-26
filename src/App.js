import './App.css';
import Nav from './components/Nav';
import Body from './body/body';
import ListMenu from "./components/ListMenu";
import Footer from './footer/footer';
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {
  return (
    <div className="App">

    Hello Plein sud
      <Nav/>
    <ListMenu />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
