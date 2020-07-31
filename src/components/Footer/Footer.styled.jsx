import styled from "styled-components";
import { colors } from "../../styles/theme"
export const StyledComponent = styled.footer`
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: ${colors.blue};
    padding:1rem 0;
    small {
      font-size:2rem;
    }
  `;