import styled, { keyframes } from "styled-components";
import Banner from '../../assets/fire.jpg'

export const Body = styled.body`
position: relative;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
background-image: url(${Banner});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

`
export const Mask = styled.div`
background-color: rgb(0, 0, 0, 0.6);
width: 100%;
min-height: 100vh;
position: absolute;
z-index: 1;
top: 0;
left: 0;

`


/*-----------------------Hero Section-----------------------------------*/

export const HeroSection = styled.div`
z-index: 1;
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 1000px) {

flex-direction: column-reverse;
justify-content: center;
} 
  

`

export const HeroImageSide = styled.div`
width: 30%;
height: auto;


`

export const HeroInfoSide = styled.div`

width: 90%;
height: auto;

@media (max-width: 1000px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
text-align: center;

} 
`

export const HeroTitle = styled.h1`

color: white;
font-size: 4.8vw;
max-width: 100%;
margin-bottom: 20px;
@media (max-width: 1000px) {

  font-size: 8.8vw;
} 
`


const AnimateTitle = keyframes`
  0% {
    clip-path: polygon(0% 50%, 10% 45%, 20% 55%, 30% 45%, 40% 55%, 50% 45%, 60% 55%, 70% 45%, 80% 55%, 90% 45%, 100% 50%, 100% 100%, 0% 100%);
  }
  25% {
    clip-path: polygon(0% 55%, 15% 50%, 25% 60%, 35% 50%, 45% 60%, 55% 50%, 65% 60%, 75% 50%, 85% 60%, 95% 50%, 100% 55%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 50%, 10% 55%, 20% 45%, 30% 55%, 40% 45%, 50% 55%, 60% 45%, 70% 55%, 80% 45%, 90% 55%, 100% 50%, 100% 100%, 0% 100%);
  }
  75% {
    clip-path: polygon(0% 55%, 10% 50%, 20% 60%, 30% 50%, 40% 60%, 50% 50%, 60% 60%, 70% 50%, 80% 60%, 90% 50%, 100% 55%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 50%, 10% 45%, 20% 55%, 30% 45%, 40% 55%, 50% 45%, 60% 55%, 70% 45%, 80% 55%, 90% 45%, 100% 50%, 100% 100%, 0% 100%);
  }
`;

export const TitleSpan = styled.span`

font-family: 'Archivo Black', 'Lexend', Arial;
    text-transform: uppercase;
    color: #9D0000;
    -webkit-text-stroke: 1px orange;
    position: relative;

    &::after {
    position: absolute;
    left: 0;
    content: 'Hambúrguer!';
    color: orange;
    animation: ${AnimateTitle} 1.8s ease-in-out infinite;
    background: -webkit-linear-gradient(#FFE700 , #FF0000);
    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}    

`


export const HeroP = styled.p`

  font-size: 1.5vw;
  color: white;
  margin-bottom: 25px;
  
  @media (max-width: 1000px) {

    font-size: 3vw;
    } 
`


export const HeroImageBox = styled.img`

  width: 100%;
  border-radius: 10px;
  height: auto;
  object-fit: cover;
 
`