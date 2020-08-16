import styled from "styled-components";
import { colors } from "../../styles/theme"

const mq = "@media (max-width:600px)";
export const StyledComponent = styled.div`
    display:grid;
    grid-template:
    "... ...... ...... ...... ...... ...... ..." 0
    "... header header header header header ..." 10rem
    "... ...... ...... ...... ...... ...... ..." 0
    "... left   ...... main   main   main   ..." minmax(100vh, 1fr)
    "... ...... ...... ...... ...... ...... ..." 0
    "... footer footer footer footer footer ..." 5rem
    "... ...... ...... ...... ...... ...... ..." 0 /
     0   250px   0     auto   auto    auto  0;

    

    .item {
      /* margin:0; */
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
    ${mq}{
      grid-template:
      "...... ...... ...... ...... ......" 0
      "header header header header header" auto
      "...... ...... ...... ...... ......" 0
      "main   main   main   main   main  " minmax(100vh, 1fr)
      "...... ...... ...... ...... ......" 0
      "footer footer footer footer footer" auto
      "left   left   left   left   left  " auto
      "...... ...... ...... ...... ......" 0 /
        0      auto   0      auto   auto;
      .footer {
        margin-bottom: 5.5rem;
      }
    }
  `;