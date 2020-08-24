import styled from "styled-components";
import { colors } from "../../../styles/theme"
const mq = "@media (max-width:600px)";

export const StyledComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mq} {
        flex-direction: column;
    }
    .text_box {
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1.4rem;
        }

    }
`;