import Board from "./components/Board";
import { ModeToggle } from "./components/ModeToggle";

const App = () => {
  return (
    <main>
      <Board />
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
    </main>
  );
};

export default App;
