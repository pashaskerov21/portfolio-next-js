import styled from "styled-components";
import { column_center, row_center } from "../mixin";
import { skillAnimation } from "../animation";

export const SkillsWrapper = styled.ul`

    width: 100%;
    ${row_center};
    gap: 40px;
    flex-wrap: wrap;
`;
type SkillProps = {
    $skillColor: string,
}
export const SkillCard = styled.div<SkillProps>`
    width: 100px;
    height: 100px;
    ${column_center}
    gap: 15px;
    background-color: ${props => props.theme.backgroundMute};
    border-radius: 20px;
    padding: 10px;
    position: relative;
    @media(min-width: 1200px){
        width: 140px;
        height: 140px;
        gap: 20px;
    }
    img{
        width: 30px;
        height: 30px;
        object-fit: contain;
        @media(min-width: 1200px){
            width: 50px;
            height: 50px;
        }
    }
    .title{
        font-size: 12px;
        font-weight: 600;
        text-align: center;
        @media(min-width: 1200px){
            font-size: 14px
        }
    }
    .border{
        position: absolute;
        width: 105px;
        height: 105px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        overflow: hidden;
        z-index: -1;
        ${row_center}
        @media(min-width: 1200px){
            width: 145px;
            height: 145px;
        }
        &::after{
            content: '';
            position: absolute;
            width: 300px;
            height: 80px;
            background-color: ${props => props.$skillColor};
            animation: ${skillAnimation} 6s linear 0s infinite;
            border-radius: 20px;
        }
    }
`;