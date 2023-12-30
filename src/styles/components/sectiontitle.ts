import styled from "styled-components";
import { row_center } from "../mixin";

export const SectionTitleWrapper = styled.div`
    width: 100%;
    ${row_center}
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    h1{
        text-transform: capitalize;
        font-family: 'Kalam', cursive;
        font-size: 28px;
        text-shadow: 0 0 30px ${props => props.theme.text};
        user-select: none;
        @media (min-width: 768px){
            font-size: 32px
        }
        @media (min-width: 992px){
            font-size: 36px
        }
        @media (min-width: 1200px){
            font-size: 40px
        }
        @media (min-width: 1400px){
            font-size: 44px;
        }
    }
`;