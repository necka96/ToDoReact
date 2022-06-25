import { CgCloseO } from "react-icons/cg";
import { MdTaskAlt } from "react-icons/md";
import styled from "styled-components";
import { useTheme } from "../Helpers/ThemeContext";
import { useCompleteToDo, useRemove } from "./../Helpers/ToDoContext";
const ToDo = ({ tasks }) => {
  const theme = useTheme();
  const removeTask = useRemove();
  const completeTask = useCompleteToDo();
  function handleRemove() {
    removeTask(tasks.id);
  }
  function handleComplete() {
    completeTask(tasks.id);
  }
  return (
    <ToDoStyle theme={theme}>
      <div className='taskHolder'>
        <p className={tasks.complete ? "complete task" : "task"}>
          {tasks.task}
        </p>
        <div className='icon'>
          <MdTaskAlt onClick={handleComplete} className='icon-one' />
          <CgCloseO onClick={handleRemove} className='icon-two' />
        </div>
      </div>
    </ToDoStyle>
  );
};

const ToDoStyle = styled.div`
  width: 100%;
  .taskHolder {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 1rem 2rem;
    gap: 30px;
    .task {
      grid-column: span 10;
      padding: 1rem;
      font-size: clamp(1.3rem, 4vw, 2rem);
      outline: none;
      border-radius: 6px;
      border: 2px solid;
      transition: all 0.5s ease-in-out;
      border-color: ${(props) => props.theme.border};
      font-size: 1.7rem;
      font-weight: 700;
      &::first-letter {
        text-transform: capitalize;
      }
    }
    .complete {
      background: ${(props) => props.theme.complete};
      color: ${(props) => props.theme.completeColor};
      border: 2px solid transparent;
    }
    .icon {
      grid-column: span 2;
      font-size: 3rem;
      display: flex;
      justify-content: center;
      gap: 30px;
      align-items: center;
      .icon-one,
      .icon-two {
        cursor: pointer;
      }
      .icon-one {
        color: ${(props) => props.theme.iconOne};
      }
      .icon-two {
        color: ${(props) => props.theme.iconTwo};
      }
    }
    @media screen and (max-width: 768px) {
      .icon {
        grid-column: span 12;
      }
      .task {
        grid-column: span 12;
      }
    }
  }
`;

export default ToDo;
