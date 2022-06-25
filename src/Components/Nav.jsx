import styled from "styled-components";
import { useTheme, useUpdateTheme } from "../Helpers/ThemeContext.js";
import colorThemes from "./../colorThemes";

const Nav = () => {
  const setTheme = useUpdateTheme();
  const theme = useTheme();
  return (
    <NavStyle theme={theme}>
      <div className='navHolder'>
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
  width: 100%;

  .navHolder {
    padding: 1rem 2rem;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.border};
    .title {
      font-size: 1.5rem;
      grid-column: span 6;
      transition: all 0.5s ease-in-out;
      color: ${(props) => props.theme.text};
      font-weight: 700;
    }
    .ball {
      grid-column: 9 / span 4;
      align-self: flex-end;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.border};
      }
    }
  }
  @media screen and (max-width: 768px) {
    .navHolder {
      padding: 1rem;
      gap: 2rem 0;
      .title {
        grid-column: span 12;
        text-align: center;
      }
      .ball {
        grid-column: span 12;
      }
    }
  }
`;

export default Nav;
