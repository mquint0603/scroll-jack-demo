import Story from "./components/story/Story";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ padding: "30vh" }}>
        <h1 className="text-center">Begin scrolling</h1>
      </div>
      <Story />
      <div style={{ padding: "200px" }}>End of scrolling</div>
    </div>
  );
}

export default App;
