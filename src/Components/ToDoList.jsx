import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useToDo } from "./../Helpers/ToDoContext";
import ToDo from "./ToDo";
const ToDoList = () => {
  const [tasks, setTasks] = useToDo();
  function handeleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handeleOnDragEnd}>
        <Droppable droppableId='tasks'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <ToDo tasks={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ToDoList;
