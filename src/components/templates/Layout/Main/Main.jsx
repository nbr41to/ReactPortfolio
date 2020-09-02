import React from "react"
import { StyledComponent } from "./Main.styled"

const Main = ({ children }) => {
    const getH2tagsText = () => {
        const getValue = document.getElementsByTagName("h2");
        const arr = [...getValue];
        arr.map(e => console.log(e.innerText));
    }
    return <StyledComponent className="main item">{children}</StyledComponent>;
}
export default Main