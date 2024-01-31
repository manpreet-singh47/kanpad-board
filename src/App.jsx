import WorkBoard from "./components/WorkBoard";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <KanbanBoard>
      <WorkBoard />
    </KanbanBoard>
  );
}

export default App;
