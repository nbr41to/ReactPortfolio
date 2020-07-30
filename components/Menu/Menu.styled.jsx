import styled from "styled-components";

export const StyledComponent = styled.div`
    ul {
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      padding:10px;

      h2 {
        font-size:1.8rem;
        margin-left:15px;
      }
      li {
        margin:10px 0;
      }
      a {
        display: flex;
        align-items:center;
        font-size:1.5rem;
        .icon {
          margin-right:10px;
        }
      }

    }
    .icon {
      font-size:3rem;
    }
  `;