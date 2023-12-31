
import styled from "styled-components";
import { row_between } from "../mixin";

export const ThemeButtonStyle = styled.div`
    ${row_between};
    background-color: ${props => props.theme.backgroundSoft};
    border-radius: 10px; 
    padding: 6px;
    box-shadow: 0 0 10px ${props => props.theme.color_1};
    border: 1px solid ${props => props.theme.color_1};
    svg{
        display: block;
    }
    .btn{
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        &.active{
            background-color: ${props => props.theme.backgroundDark};
            box-shadow: 0 0 10px ${props => props.theme.color_1};

        }
    }
`;
