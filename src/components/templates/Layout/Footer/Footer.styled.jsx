import styled from "styled-components";
import { colors } from "../../../../styles/theme"

export const StyledComponent = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.cream};
    padding: 1rem 0;
    width: 100%;
    position: relative;
      bottom: 0;
      left: 0;
    small {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
    .btn {
      margin: 0.5rem;
      color: #333;
    }
  `;