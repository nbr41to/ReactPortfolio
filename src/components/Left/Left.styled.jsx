import styled from "styled-components";
import { colors } from "../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${colors.orange};
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem;
    /* ここのMarginはLayoutで0に設定されているとき上書きできない */
    ${mq} {
      width: 100%;
      height: 5.5rem;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10;
      border-radius: 0px;
      padding: 0;
      margin: 0;
    }
  `;