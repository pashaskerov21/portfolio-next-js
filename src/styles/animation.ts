import { keyframes } from "styled-components";

export const preloaderAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100%{
    transform: rotate(360deg)
}
`
export const pulseAnimation = keyframes`
    0% {box-shadow: 0 0 0 0 #42b883;}
    80% {box-shadow: 0 0 0 10px rgba(255, 134, 134, 0);}
    100% {box-shadow: 0 0 0 0 rgba(255, 134, 134, 0);}
`
export const fixHeaderAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

export const logoSpanAnimation = keyframes`
0%{
    transform: translateY(0);
}
50%{
    transform: translateY(-10px);
}
100%{
    transform: translateY(0);
}
`

export const headerLinkAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-15px);
    }
    100%{
        opacity: 1;
        transform: translateY(0)
    }
`;

export const headerSocialIonAnimation = keyframes`
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.4)
    }
    100%{
        transform: scale(1)
    }
`;


export const titleAnimation = keyframes`
    70%,90%{
        width: 100%;
    }
`

export const skillAnimation = keyframes`
    0%{
        transform: rotate(0)
    }
    100%{
        transform: rotate(360deg)
    }
`
export const projectSkillAnimation = keyframes`
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
`
export const projectLinkAnimation = keyframes`
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

export const opacityHideAnimation = keyframes`
    100%{
        opacity: 0;
    }
`
export const opacityShowAnimation = keyframes`
    100%{
        opacity: 1;
    }
`

export const timerModalAnimation = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;