import styled from "styled-components";
// import { colors } from "../../styles/theme"

const mq = "@media (max-width:600px)";

export const StyledComponent = styled.main`
    /* 共通 */
    /* padding: 2rem; */
    height: 100%;
    ${mq} {
        padding: 0;
      }
    h1 {
        font-family: Arial Black;
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
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        color: white;
        ${mq} {
          border-radius:0;
        }
        h2 {
            text-align: left;
            font-size: 2.6rem;
            letter-spacing: 0.2rem;
            margin-top:2rem;
            margin-left:2rem;
          }
          p {
            text-align: right;
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

      .markdown {
        padding: 2rem;
        h2 {
          font-size: 2.0rem;
          padding: 0.5rem;
          margin: 0.5rem;
          margin-top: 4rem;
          border-bottom: 1px solid #ccc;
        }
        p {
            font-size: 1.6rem;
            margin: 2.5rem 1rem;
            line-height: 3rem;
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