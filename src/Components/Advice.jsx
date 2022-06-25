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
          <div>
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
  margin-top: 2rem;
  p {
    font-size: 2rem;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 7rem;
    font-family: "Dancing Script", cursive;
    span {
      display: inline-block;
      margin: 2rem 0;
      text-decoration: underline;
      font-size: 2.2rem;
      font-family: "Yellowtail", cursive;
      font-weight: bold;
    }
  }
`;

export default Advice;
