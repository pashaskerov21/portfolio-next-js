import styled from "styled-components";
import { column_align_start, column_center, row_between, row_center, row_justify_end } from "../mixin";
import { titleAnimation } from "../animation";

export const HomeContentWrapper = styled.div`
    width: 100%;
    ${column_center};
    padding: 20px 0;
    gap: 40px;
    @media (min-width: 1200px){
        ${row_between};
    }
    .content{
        width: 100%;
        text-align: center;
        ${column_center};
        @media (min-width: 1200px){
            width: 47%;
            ${column_align_start};
            text-align: start;
        }
    }
    .image{
        width: 100%;
        ${row_center}
        @media (min-width: 1200px){
            width: 47%;
            ${row_justify_end}
        }
        img{
            width: 100%;
            height: auto;
            max-width: 500px;
            max-height: 500px;
        }
    }
`;

export const HomeTitle = styled.h1`
    margin-bottom: 15px;
    user-select: none;
    font-size: 30px;
    text-shadow: 0 0 40px ${props => props.theme.text};    
    @media (min-width: 768px){
        font-size: 40px;
    }
    @media (min-width: 1200px){
        font-size: 50px;
    }
    @media (min-width: 1400px){
        font-size: 60px;
    }
`;
type AnimationProps = {
    title: string
}
export const AnimationTitle = styled.h2<AnimationProps>`
    text-transform: uppercase;
    color: transparent;
    position: relative;
    user-select: none;
    white-space: nowrap;
    font-size: 18px;
    @media (min-width: 576px){
        font-size: 25px;
    }
    @media (min-width: 768px){
        font-size: 30px;
    }
    @media (min-width: 1200px){
        font-size: 40px;
    }
    @media (min-width: 1400px){
        font-size: 50px;
    }
    &::after{
        content: '${props => props.title}';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-right: 2px solid ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryColor};
        overflow: hidden;
        animation: ${titleAnimation} 3s linear infinite;
        z-index: 999;
    }

`
export const HomeTextWrapper = styled.div`
    width: 100%;
    max-width: 550px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 32px;
    font-weight: 500;
    margin-top: 20px;
    @media (min-width: 768px){
        font-size: 18px
    }
    @media (min-width: 992px){
        margin-top: 40px;
        font-size: 22px;
    }
`;
