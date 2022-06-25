import styled from "styled-components";
import useFetch from "../Hooks/useFetch";
import { useTheme } from "./../Helpers/ThemeContext";

const Advice = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.adviceslip.com/advice"
  );
  const theme = useTheme();
  return (
    <AdviceStyle theme={theme}>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <div className='adviceHolder'>
            <p>
              {" "}
              I will give you advice: <br /> <span>{data.advice}</span>{" "}
            </p>
          </div>
        </div>
      )}
    </AdviceStyle>
  );
};

const AdviceStyle = styled.div`
  .adviceHolder {
    p {
      font-size: clamp(1.2rem, 4vw, 2rem);
      width: 70%;
      margin: 0 auto;
      font-family: "Open Sans", sans-serif;
      span {
        display: inline-block;
        margin: 2rem 0;
        text-decoration: underline;
        font-size: clamp(1.3rem, 4vw, 2.2rem);
        font-weight: 700;
      }
    }
  }
`;

export default Advice;
