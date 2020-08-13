import styled from "styled-components";
import { colors } from "../../styles/theme"
import home_catch from '../../images/home_catch.jpg';

const mq = "@media (max-width:600px)";
// const home_catch = "../../images/home_catch.jpg";

export const StyledComponent = styled.main`
    /* 共通 */
    padding: 2rem;
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
            font-size: 2.4rem;
            letter-spacing: 0.2rem;
            margin-top:2rem;
            margin-left:2rem;
          }
          p {
            text-align: right;
            /* font-family: 'cursive'; */
            font-family: 'Comic Sans MS';
            font-size: 2.2rem;
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