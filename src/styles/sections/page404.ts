import styled from "styled-components";
import { column_center } from "../mixin";

export const Page404 = styled.section`
    ${column_center};
    gap: 30px;
    /* padding: 30px; */
    color: #42b883;
    font-family: 'Kalam', cursive;
    font-weight: 600;
    text-align: center;
    .error-code{
        font-size: 80px;
        line-height: 80px;        
    }
    .error-text{
        font-size: 24px;
    }
    .rotate-link{
        padding: 10px 15px;
        border: 1px solid #42b883;
        border-radius: 10px;
        font-size: 24px;
    }
`;