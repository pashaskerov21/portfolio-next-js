import styled from "styled-components";
import { column_center, row_center } from "../mixin";

export const Custom404Wrapper = styled.div`
    width: 100%;
    padding: 80px 15px;
    ${column_center};
    .error{
        font-size: 100px;
        font-weight: 600;
        color: ${props => props.theme.primaryColor};
        @media (min-width: 992px){
            font-size: 200px;
        }
    }
    .text{
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 600;
        margin: 20px 0 40px;
        @media (min-width: 992px){
            font-size: 34px;
        }
    }
    a{
        width: 100%;
        max-width: 240px;
        ${row_center};
        text-align:center;
        padding: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        background-color: ${props => props.theme.primaryColor};
        font-size: 20px;
        font-weight: 600;
        border-radius: 10px;
        transition: all 0.2s;
        &:hover{
            box-shadow: 0 0 50px ${props => props.theme.primaryColor};
        }
    }
`;