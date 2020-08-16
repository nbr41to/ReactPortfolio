import styled from "styled-components";
// import { colors } from "../../styles/theme"
import home_catch from '../../images/home_catch.jpg';

const mq = "@media (max-width:600px)";
// const home_catch = "../../images/home_catch.jpg";

export const StyledComponent = styled.main`
    /* 共通 */
    padding: 2rem;
    height: 100%;
    ${mq} {
        padding: 0;
      }
    h1 {
        font-family: 'Arial Black';
        font-size: 3.2rem;
        margin: 1rem 1.5rem;
      }

    /* 
      HOME PAGE 
    */
    .home{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        h2 {
          font-size: 1.8rem;
          margin: 1rem;
        }
        img {
          width: 80%;
          margin: 1rem;
          outline: 1px solid #ccc;
        }
      }
      /* CATCH */
      .catch {
        height: 15rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        color: white;

        border-radius: 1rem;
        background-image: url(${home_catch});
        background-position: bottom 30% right;
        background-size: cover;
        ${mq} {
          border-radius:0;
        }
        h2 {
            text-align: left;
            /* font-family: 'HiraKakuProN-W6'; */
            font-size: 2.6rem;
            letter-spacing: 0.2rem;
            margin-top:2rem;
            margin-left:2rem;
          }
          p {
            text-align: right;
            /* font-family: 'cursive'; */
            font-family: 'Comic Sans MS';
            font-size: 2.4rem;
            margin-right:2rem;
            margin-bottom:1rem;
          }
          ${mq} {
            h2 {
            font-size: 1.8rem;
            letter-spacing: 0.2rem;
            }
            p {
              font-size: 1.6rem;
            }
          }
        }
      }

    /* 
      ABOUT PAGE 
    */
    .about {
      h2 {
        font-size: 2.0rem;
        padding: 0.5rem;
        margin: 0.5rem;
        border-bottom: 1px solid #ccc;
      }
      p {
          font-size: 1.6rem;
          margin: 1rem;
      }
      li {
        font-size:1.6rem;
        margin: 1rem;
        line-height: 3rem;
        :before {
          content: "-";
          margin-right: 0.5rem;
        }
      }
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        flex-wrap: wrap;
        img {
            width: 240px;
            border: 1px solid #ccc;
            border-radius: 100%;
            margin: 3rem;
          }
        .profile {
          padding: 2rem;
          border: 1px solid #ccc;
          border-radius: 2rem;
        }
        /* MEDIA QUERY */
        ${mq} {
          padding: 2rem;
          img {
            width: 80%;
            margin: 0;
          }
          .profile {
            width: 100%;
            padding: 0;
            border: none;
            border-radius: 0;
            margin-top:2rem;
          }
        }
      }
      .markdown {
        padding: 2rem;
        h2 {
          margin-top: 4rem;
        }
        p {
          margin: 2.5rem 1rem;
          line-height: 3rem;
        }
        li {
          font-size:1.6rem;
          margin: 1rem;
          line-height: 3rem;
          /* :before {
            content: "-";
          } */
        }
      }
      .bottom {
        padding: 2rem;
      }
    }

    /* 
      WORK PAGE 
    */


    /* 
      CONTACT PAGE 
    */
    .contact {

    }
`;