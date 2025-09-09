import styled from "styled-components";
import { column_align_start, column_center, column_start, row_justify_start } from "../mixin";

export const ServicesWrapper = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    place-content: center;
    place-items: center;
    gap: 30px;
    li{
        width: 100%;
        max-width: 400px;
        height: 100%;
    }
    @media (min-width: 768px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (min-width: 1200px){
        grid-template-columns: repeat(3,1fr);
    }
    .service-card{
        width: 100%;
        max-width: 400px;
        height: 100%;
        padding: 30px 20px;
        border-radius: 20px;
        box-shadow: 0 0 10px ${props => props.theme.primaryColor};
        ${column_start};
        gap: 15px;
        .service-title{
            color: ${props => props.theme.primaryColor};
            ${row_justify_start};
            gap: 10px;
            font-size: 18px;
            line-height: 24px;
            @media (min-width: 1400px){
                font-size: 20px;
                line-height: 28px;
            }
        }
        .text{
            font-size: 16px;
            line-height: 24px;
        }
    }
`;