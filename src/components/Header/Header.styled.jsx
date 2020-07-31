import styled from "styled-components";
import { colors } from "../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.header`
    display: flex;
    justify-content:flex-start;
    align-items:center;
    /* background-color: ${colors.cream}; */
    padding:2rem;
    img {
      width:80px;
      height:80px;
    }
    h1 {
      font-size:6rem;
      margin-left:3rem;
    }
    ${mq} {
      background-color: lightgreen;
      padding: 1rem;
      h1 {
        font-size:3rem;
        color: #FFF;
        margin-left:0;
        flex: 1;
        text-align: center;

      }
      img {
        width:50px;
        height:50px;
        margin: 0.5rem 1.5rem;
      }
    }
  `;