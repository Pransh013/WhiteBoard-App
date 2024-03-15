import Board from "./components/Board";
import { ModeToggle } from "./components/ModeToggle";
import Toolbar from "./components/Toolbar";

const App = () => {
  return (
    <main>
      <Toolbar/>
      <Board />
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
    </main>
  );
};

export default App;
