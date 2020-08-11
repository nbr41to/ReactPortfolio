import styled from "styled-components";
import { colors } from "../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.main`
    padding: 2rem;
    h1 {
      font-family: 'Arial Black';
      font-size: 3.2rem;
      margin: 1rem 0;
    }
    section {
      margin: 1rem;
      h2 {
        font-family: 'Arial';
        font-weight: bold;
        width: 100%;
        font-size: 2.4rem;
        border-bottom: 1px solid #ccc;
      }
      p {
        font-size: 1.6rem;
        /* これが何pxなのか謎（10pxではない） */
        padding: 0.5rem;
      }
    }
`;