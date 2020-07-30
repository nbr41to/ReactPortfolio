import styled from "styled-components";

export const StyledComponent = styled.div`
    display:grid;
    grid-template:
    "header header header" auto
    "left   main   main"   auto
    "footer footer footer" auto /
    30%     1fr    1fr;

    .item {
      margin:10px;
    }

    .header {
      grid-area: header;
    }
    .main {
      grid-area: main;
    }
    .left {
      grid-area:left;
    }
    .footer {
      grid-area: footer;
    }
  `;