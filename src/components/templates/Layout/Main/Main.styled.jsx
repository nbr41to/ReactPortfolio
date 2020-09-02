import styled from "styled-components";
// import { colors } from "../../styles/theme"

const mq = "@media (max-width:600px)";

export const StyledComponent = styled.main`
    /* 共通 */
    h1 {
        font-family: Arial Black;
        font-size: 3.2rem;
        margin: 1rem 1.5rem;
      }
    
    /* 
      HOME PAGE 
    */

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
    
`;