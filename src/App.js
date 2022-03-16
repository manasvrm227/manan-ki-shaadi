import "./App.css";
import Jumbotron from "./components/Jumbotron";
import "./assets/fonts/PlaylistScript.ttf";
import OurStory from "./components/our-story";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron />
        <OurStory />
      </header>
    </div>
  );
}

export default App;
