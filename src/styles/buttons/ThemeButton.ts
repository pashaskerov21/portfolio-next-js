
import styled from "styled-components";
import { row_between } from "../mixin";

export const ThemeButtonStyle = styled.div`
    ${row_between};
    background-color: ${props => props.theme.backgroundSoft};
    border-radius: 10px; 
    padding: 4px;
    box-shadow: 0 0 10px ${props => props.theme.color_1};
    border: 1px solid ${props => props.theme.color_1};
    @media (min-width: 768px){
        padding: 4px 8px;
    }
    svg{
        display: block;
    }
    .btn{
        padding: 6px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 12px;
        @media (min-width: 992px){
            font-size: 14px;
            padding: 8px;
        }
        &.active{
            background-color: ${props => props.theme.backgroundDark};
            box-shadow: 0 0 10px ${props => props.theme.color_1};

        }
    }
`;
