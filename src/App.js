import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";


function App(props) {
  return (
          <div className="App-wrapper">
              <Header/>
              <Sidebar/>
              <Content/>
          </div>
  );
}

export default App;
