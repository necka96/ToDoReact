import { createContext, useContext, useEffect, useState } from "react";

const ToDo = createContext();
const CompleteToDo = createContext();
const Remove = createContext();
const AddToDo = createContext();

export const useToDo = () => {
  return useContext(ToDo);
};
export const useCompleteToDo = () => {
  return useContext(CompleteToDo);
};
export const useRemove = () => {
  return useContext(Remove);
};
export const useAddToDo = () => {
  return useContext(AddToDo);
};

export const ToDoContext = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const completeTask = (id) => {
    setTasks(
      tasks.map((prevTask) => {
        if (prevTask.id === id) {
          return {
            ...prevTask,
            complete: !prevTask.complete,
          };
        }
        return prevTask;
      })
    );
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((prevTask) => prevTask.id !== id));
  };
  const addToDo = (toDo) => {
    setTasks([toDo, ...tasks]);
  };
  useEffect(() => {
    const saveMe = JSON.parse(localStorage.getItem("tasks"));
    if (saveMe) {
      setTasks(saveMe);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <ToDo.Provider value={[tasks, setTasks]}>
      <AddToDo.Provider value={addToDo}>
        <CompleteToDo.Provider value={completeTask}>
          <Remove.Provider value={removeTask}>{children}</Remove.Provider>
        </CompleteToDo.Provider>
      </AddToDo.Provider>
    </ToDo.Provider>
  );
};
