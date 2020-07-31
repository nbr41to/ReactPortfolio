import styled from "styled-components";

// 好きなComponent名でOK
export const StyledComponent = styled.div`
display: flex;
  a {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: aqua;
      border-radius:10px;
      /* font-size:100px; */
    
        padding:10px;
        svg {
        color:red;
            
        }
    }
  `;