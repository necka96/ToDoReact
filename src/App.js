import { useEffect, useState } from "react";
import styled from "styled-components";
import Advice from "./Components/Advice";
import ForomToDo from "./Components/ForomToDo";
import Nav from "./Components/Nav";
import ToDoList from "./Components/ToDoList";
import { useTheme } from "./Helpers/ThemeContext";
import { ToDoContext } from "./Helpers/ToDoContext";

const App = () => {
  const theme = useTheme();
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setPreloader(false);
    });
  }, []);

  return (
    <ToDoContext>
      <AppStyled theme={theme}>
        <div className={preloader ? "preloader fadeOut" : "fadeOut"}>
          <div className='balls'>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
          </div>
        </div>

        <Nav />
        <div className='holder'>
          <Advice />
          <ForomToDo />
          <ToDoList />
        </div>
      </AppStyled>
    </ToDoContext>
  );
};
const AppStyled = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  transition: all 0.5s ease-in-out;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: relative;
  .preloader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: ${(props) => props.theme.bg};
    height: 100%;
    z-index: 100;
    display: grid;
    place-items: center;
    transition: 0.5s ease-in-out;
    .balls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: 100%;
      .ball {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: ${(props) => props.theme.text};
        animation: animate 2s infinite;
        &:nth-child(1) {
          animation-delay: 1s;
        }
        &:nth-child(2) {
          animation-delay: 1.2s;
        }
        &:nth-child(3) {
          animation-delay: 1.4s;
        }
      }
    }
    &.fadeOut {
      animation: fadeOut 2s forwards;
      animation-delay: 3s;
    }
  }
  .holder {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export default App;
