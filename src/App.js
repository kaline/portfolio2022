import './App.css';
import Header from './header/Header';
import Sidebar from './sideBar/Sidebar';
import Footer
 from './footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Footer></Footer>
    </div>
  );
}

export default App;
