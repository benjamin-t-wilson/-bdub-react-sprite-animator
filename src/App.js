import "./App.css";
import SpriteAnimator from "./lib/components/SpriteAnimator";

import IdleSheet from "./local/idle_sheet.png";

function App() {
  return (
    <div className="App">
      <SpriteAnimator sheet={IdleSheet} columns={16} />
    </div>
  );
}

export default App;
