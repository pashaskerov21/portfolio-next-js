import styled from "styled-components";
import { column_center, row_center } from "../mixin";
import { skillAnimation } from "../animation";

export const SkillsWrapper = styled.ul`

    width: 100%;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(1,1fr);
    place-items: center;
    margin: auto;
    @media (min-width: 320px){
        grid-template-columns: repeat(2,1fr);
    }
    @media (width >= 576px){
        gap: 40px;
    }
    @media (min-width: 768px){
        grid-template-columns: repeat(3,1fr);
    }
    @media (min-width: 992px){
        grid-template-columns: repeat(4,1fr);
    }
    @media (min-width: 1400px){
        grid-template-columns: repeat(5,1fr);
    }


`;
type SkillProps = {
    $skillColor: string,
}
export const SkillCard = styled.div<SkillProps>`
    width: 140px;
    height: 140px;
    ${column_center}
    background-color: ${props => props.theme.backgroundMute};
    border-radius: 20px;
    padding: 10px;
    position: relative;
    margin-bottom: 10px;
    @media (width >= 576px){
        width: 200px;
        height: 150px;
        padding: 20px;
    }
    img{
        width: 50px;
        height: 50px;
        object-fit: contain;
        margin-bottom: 20px;
        @media (width >= 576px){
            width: 70px;
            height: 70px;
        }
    }
    .title{
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        @media (width >= 576px){
            font-size: 16px;
        }
    }
    .border{
        position: absolute;
        width: 150px;
        height: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        overflow: hidden;
        z-index: -1;
        ${row_center}
        @media (width >= 576px){
            width: 210px;
            height: 160px;
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