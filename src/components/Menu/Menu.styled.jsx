import styled from "styled-components";
import { colors } from "../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.div`
  width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      padding:10px;
      h2 {
        width: 100%;
        font-size:2.8rem;
        text-align:center;
        padding:0 1rem 1.5rem 1rem;
      }
      li {
        width: 100%;
        margin:10px 0;
      }
      a {
        display: flex;
        align-items:center;
        font-size:2.4rem;
        .icon {
          font-size:3.5rem;
          margin-right:10px;
        }
        &:hover {
          color: ${colors.cream};
          text-decoration: underline;
          transition-duration:0.3s;
        }
        .active {
          color: ${colors.cream};
        }
      }

    }
    ${mq} {
      ul {
        /* display: flex; */
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        h2 {
          display: none;
        }
        .icon {
          font-size:4rem;
          margin:0 2rem;
        }
        span {
          display: none;
        }
        /* タッチエフェクトを付けたい */
        &:active {
          /* background-color: blue; */
          color: ${colors.cream};
          text-decoration: underline;
          transition-duration:0;
        }
      }
    }
`;