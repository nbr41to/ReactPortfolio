import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { colors } from "../../../styles/theme"


const mq = "@media (max-width:600px)";
export const StyledComponent = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display:grid;
    grid-template:
    "... ...... ...... ...... ...... ...... ..." 0
    "... header header header header header ..." 10rem
    "... ...... ...... ...... ...... ...... ..." 0
    "... left   ...... main   main   main   ..." minmax(100vh, 1fr)
    "... ...... ...... ...... ...... ...... ..." 0
    "... footer footer footer footer footer ..." 5rem
    "... ...... ...... ...... ...... ...... ..." 0 /
     0   300px  0     auto   auto    auto  0;

    

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
      grid-area: left;
    }
    .right {
      grid-area: right;
      display: none;
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
      "...... ...... ...... ...... ......" 5rem /
        0      auto   0      auto   auto;

      .left {
        width: 80%;
        position: fixed;
        top: 0;
        right: 0%;
        transform: ${({ hamOpen }) => hamOpen ? "translateX(0%)" : "translateX(100%)"};
        z-index: 5;
        background-color: ${colors.blue};
        border-bottom-left-radius: 1rem;
        opacity: 0.9;
        transition: transform .3s;
      }
    }
  `;