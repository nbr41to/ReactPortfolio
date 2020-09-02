import styled, { css } from "styled-components";
import { colors } from "../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.nav`
  ${(props) => (props.row) ? css`
  /**
  * 横のメニュー
  */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      /* width: 100%; */
      color: #444;
      font-size:1.2rem;
      text-align:center;
      padding: 0.3rem;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items:flex-start;
      li {
        width: 100%;
        margin: 0 0.8rem;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        font-size:1.4rem;
        position: relative;
        .icon {
          font-size: 3.0rem;
          margin: 0.5rem;
        }
        span {
          display: none;
        }
        &:hover {
          color: ${colors.orange};
          text-decoration: underline;
          transition-duration:0.3s;
          span {
          display: block;
          position: absolute;
          top: 3.2rem;
          z-index: 1;
        }
        }
      }
      .active {
        color: ${colors.orange};
        font-weight: bold;
        filter: drop-shadow(1.5px 1.5px 0.5px rgba(0,0,0,0.6));
      }   
    }
    .subtitle {
      display: none;
    }
    /* Media Query */
  ${mq} {
    width: 100%;
    height: 5rem;
    justify-content: center;
    background-color: palegreen;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    h2 {
      display: none;
    }
    ul {
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      padding: 0;
      li {
        height: 100%;
      }
      a {
        height: 100%;
        .icon {
          font-size: 3.0rem;
        }
        &:hover {
          color: ${colors.cream};
          span {
          display: none;
        }
        }
      }
      .active {
        color: ${colors.cream};
        background-color: green;
        font-weight: bold;
      }   
    }
  }
  `
    :
    css`
    /**
    * 縦のメニュー
    */
    width: 100%;
    h2 {
      width: 100%;
      font-size: 1.8rem;
      text-align: center;
      padding: 2rem 0 1rem;
    }
    
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 3rem;
      li {
        width: 100%;
        a {
          margin: 1rem 0;
          display: flex;
          align-items: center;
          font-size: 2.2rem;
          .icon {
            font-size:3.2rem;
            margin: 0 1rem;
          }
          &:hover {
            color: ${colors.cream};
            transition-duration:0.4s;
          }
        }
      }
      .active {
        color: ${colors.cream};
        font-weight: bold;        
        filter: drop-shadow(1.5px 1.5px 0.5px rgba(0,0,0,0.6));
      }
    }
    .subtitle {
      display: none;
    }
    .subtitle_active{
      display: flex;
      width: 100%;
      padding-right: 0;
      li {
        padding: 0 1rem;
        /* margin-top: 0.5rem; */
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        /* border-bottom-left-radius: 0.5rem; */
        a {
          font-size: 1.6rem;
          &:hover {
            color: ${colors.blue};
            text-decoration: underline;
            transition-duration:0.4s;
          }
        }
      }
    }
        /* Media Query */
        /* ようはハンバーガー用だよね */
    ${mq} {
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 1.8rem;
        padding: 3rem 0 2rem;
      }
      ul {
      padding: 0 1rem 1.5rem;
      li {
        width: 100%;
        a {
          font-size: 2.0rem;
          .icon {
            font-size:2.2rem;
          }
          &:hover {
            color: navy;
          }
        }
      }
      .active {
        background-color: ${colors.cream};
        color: navy;
      }
    }
    .subtitle_active{
      li {
        background-color: ${colors.cream};
        a {
          font-size: 1.4rem;
        }
      }
    }
  `}
`;
