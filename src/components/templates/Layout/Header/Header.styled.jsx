import styled from "styled-components";
import { colors } from "../../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:2rem;
    background-color: ${colors.cream};
    .logo_box {
      img {
        width:auto;
        height: 80px;
      }
      h1 {
        font-size:6rem;
        margin-left:3rem;
      }
    }
    ${mq} {
      background-color: lightgreen;
      padding: 1rem;
      .logo_box {
        img {
          width:auto;
          height:60px;
        }
        h1 {
          font-size:3rem;
          color: #FFF;
          margin-left:0;
          flex: 1;
          text-align: center;
        }
      }
    }
  `;