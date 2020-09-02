import styled, { css } from "styled-components";
import { colors } from "../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.section`
  padding: 1.5rem 2rem;
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
  }
  a {
    color: navy;
    text-decoration: underline;
  }
  .text_box{
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.6rem;
      padding: 1rem;
    }
  }
  ul {
    padding: 1rem;
    h3 {
      /* listTitle */
      font-size: 1.8rem;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.5rem;
      :before {
        content: '#';
        margin-right: 0.5rem;
      }
    }
    li {
      font-size:1.6rem;
      margin: 1rem;
      :before{
        content: '-';
        margin-right: 0.5rem;
      }
    }
  }
  .view_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img, iframe {
      width: 80%;
      outline: 1px solid #ccc;
    }
    p {
      font-size: 1.4rem;
      margin: 1rem;
    }
  }

/* 横Version */
  ${(props) => props.wide && `
    .section_inner {
      display: flex;
      flex-direction: row-reverse;
      .text_box, .view_box {
        justify-content: center;
        align-items: center;
        width: 50%;
      }
    }
    `
  }
`;