import { useState } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import { useTheme } from "../Helpers/ThemeContext";
import { useAddToDo } from "../Helpers/ToDoContext";
const ForomToDo = () => {
  const theme = useTheme();
  const addToDo = useAddToDo();
  const [toDo, setToDo] = useState({
    id: "",
    task: "",
    complete: false,
  });

  function handleChange(e) {
    setToDo((prevToDo) => {
      return {
        ...prevToDo,
        task: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (toDo.task.trim()) {
      addToDo({ ...toDo, id: uniqid() });
      setToDo({ ...toDo, task: "" });
    }
  }
  return (
    <FormStyle theme={theme}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          name='task'
          value={toDo.task}
          placeholder='Enter your task'
          id='text'
        />

        <button>Add toDo</button>
      </form>
    </FormStyle>
  );
};
const FormStyle = styled.div`
  width: 100%;
  form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 1rem 2rem;
    gap: 30px;
    position: relative;
    input {
      grid-column: span 6;
      padding: 1rem;
      font-size: clamp(1.3rem, 4vw, 2rem);
      outline: none;

      border: none;
      background: transparent;
      border-bottom: 2px solid ${(props) => props.theme.border};
      color: ${(props) => props.theme.text};
      outline: none;
    }

    button {
      grid-column: span 6;
      padding: 1rem;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme.btn};
      color: ${(props) => props.theme.textBtn};
      font-size: clamp(1.3rem, 4vw, 2rem);
      cursor: pointer;

      transition: all 0.5s ease-in-out;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  @media screen and (max-width: 768px) {
    form {
      input {
        grid-column: span 12;
      }
      button {
        grid-column: span 12;
      }
    }
  }
`;
export default ForomToDo;
