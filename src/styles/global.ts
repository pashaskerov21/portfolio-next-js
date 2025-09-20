import { createGlobalStyle } from "styled-components";
import { column_between } from "./mixin";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}

  body{
    ${column_between}
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
}
::-webkit-scrollbar{
    width: 10px; 
    height: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.primaryColor};
}
::-webkit-scrollbar-track{
    background-color: ${props => props.theme.background};
}
::selection {
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.background};
}
a, a:hover, a:active, a:visited {
    text-decoration: none;
    color: inherit;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
button{
  background-color: transparent;
  border: none;
  outline: none;
}
main{
  width: 100%;
}
section{
  width: 100%;
  padding: 30px 0;
  margin-bottom: 40px;
  position: relative;
}
img{
  user-select: none;
}
.code-img-design{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  pointer-events: none;
  display: none;
  animation: design-img 1s ease infinite;
  &.right{
    right: 5%;
  }
  &.left{
    left: 5%
  }
  @media (min-width: 1400px){
    display: block;
  }
  @media (min-width: 1500px){
    &.right{
      right: 10%;
    }
    &.left{
      left: 10%
    }
  }
}
@keyframes design-img{
  0%{
    transform: translateY(-35%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0px);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100%{
    transform: translateY(-35%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
}
`;