import "./App.css";
import SpriteAnimator from "./lib/components/SpriteAnimator";

import IdleSheet from "./assets/idle_sheet.png";

function App() {
  return (
    <div className="App">
      <SpriteAnimator sheet={IdleSheet} columns={16} size={32} />
    </div>
  );
}

export default App;
