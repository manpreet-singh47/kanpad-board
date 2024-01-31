import { useState } from "react";
import Card from "./components/card";
import WorkBoard from "./components/WorkBoard";
import KanbanBoard from "./components/KanbanBoard";
import { DndContext, closestCorners } from "@dnd-kit/core";

// import { Draggable } from "./Draggable";
// import { Droppable } from "./Droppable";

function App() {
  return (
      <KanbanBoard>
        <WorkBoard />
      </KanbanBoard>

  );
}

export default App;
