import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    /* color: ${props => (props.whiteColor ? 'white' : 'black')}; */
    font-family: "Hiragino Maru Gothic ProN";
    /* font-family: Arial Black; */
    font-size:62.5%;
    /* これで,デフォで10px */
  }
`