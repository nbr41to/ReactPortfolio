import styled from "styled-components";
import { colors } from "../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.main`
    section {
      padding: 0.5rem 1.5rem;
      margin: 2.5rem 2rem;
      border-radius:1rem;
      box-shadow: 2px 2px 1rem #ccc;
      
      h2 {
        font-family: 'Arial';
        font-weight: bold;
        width: 100%;
        font-size: 2.2rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #ccc;
        margin: 1rem 0;
      }
      p {
        font-size: 1.6rem;
        /* これが何pxなのか謎（10pxではない） */
        padding: 0.5rem;
      }
      /* listTitle */
      h3 {
        font-size:1.8rem;
        border-bottom:1px solid #ccc;
        padding-bottom: 0.5rem;
        :before {
          content: '#';
          margin-right: 0.5rem;
        }
      }
      ul {
        /* padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 1rem; */
        li {
          font-size:1.6rem;
          margin: 1rem;
          :before{
            content: '-';
            margin-right: 0.5rem;
          }
        }
      }
    }
`;