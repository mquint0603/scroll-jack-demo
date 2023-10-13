import Story from "./components/story/Story";
import "./App.css";
import HeroPanel from "./components/HeroPanel/HeroPanel";

function App() {
  return (
    <div>
      <HeroPanel />
      <Story />
      <div style={{ padding: "200px" }}>End of scrolling</div>
    </div>
  );
}

export default App;
