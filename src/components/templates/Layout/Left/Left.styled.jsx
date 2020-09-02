import styled from "styled-components";
import { colors } from "../../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.div`
    background-color: ${colors.green};

    /* ここのMarginはLayoutで0に設定されているとき上書きできない */
    ${mq} {

    }
  `;