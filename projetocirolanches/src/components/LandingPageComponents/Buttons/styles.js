import styled, { keyframes } from "styled-components";

export const ButtonLeftSide = styled.button`

  font-size: 1.5vw;
  width: 30%;
  height: auto;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to right, #8B0000, #B22222, #DC143C, #FF0000, #FF6347, #8B0000);
  background-size: 250%;
  background-position: left;
  color: #ffd277;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 1s;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "FAZER PEDIDO";
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
  }
      &:hover {
      background-position: right;
      transition-duration: 1s;

      &::before {
        background-position: right;
        transition-duration: 1s;
        color: #ffd277;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  
    @media (max-width: 1000px) {
      width: 50%;
      padding: 20px;
      font-size: 3vw;
    } 

`



const Shine = keyframes`
  0% {
    left: -100px;
  }
  60% {
    left: 100%;
  }
  to {
    left: 100%;
  }
`


export const ButtonHeader = styled.button`

  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  border-radius: 10px;
  background: linear-gradient(to bottom, #d85252, #e44644, #ee3734, #f72521, #ff0000);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  font-weight: bold;
  border: none;
  outline: none;
  overflow: hidden;
  font-size: 1vw;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 30% , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%);
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #fff9;

    &::before {
      animation: ${Shine} 1.5s ease-out infinite;
    }

  }

  @media (max-width: 1000px) {
    font-size: 2vw;
 
    } 

`

export const BoxInsta = styled.img `
cursor: pointer;
position: fixed;
bottom: 20px;
right: 20px;
z-index: 2;
width: 35px;
height: 35px;
`