import styled from "styled-components";
import { useTheme, useUpdateTheme } from "../Helpers/ThemeContext.js";
import colorThemes from "./../colorThemes";

const Nav = () => {
  const setTheme = useUpdateTheme();
  const theme = useTheme();
  return (
    <NavStyle theme={theme}>
      <div className='holder'>
        <div className='title'>To Do List</div>
        <div className='ball'>
          {colorThemes.map((theme, index) => {
            return (
              <button
                key={index}
                onClick={() => setTheme(index)}
                style={{ backgroundColor: theme.bg }}
              ></button>
            );
          })}
        </div>
      </div>
    </NavStyle>
  );
};
const NavStyle = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  .holder {
    padding: 1rem 2rem;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.border};
    .title {
      font-size: 1.5rem;
      grid-column: span 10;
      transition: all 0.5s ease-in-out;
      color: ${(props) => props.theme.text};
      font-family: "Dancing Script", cursive;
    }
    .ball {
      grid-column: span 2;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .holder {
      padding: 1rem;
      .title {
        grid-column: span 5;
      }
      .ball {
        grid-column: span 5;
      }
    }
  }
`;

export default Nav;
