import styled from "styled-components";

export const Button = styled.button`

border: ${props => props.isGreen ? 'none' : '2px solid yellow'};
background-color: ${props => props.isGreen ? 'green' : '#fd0000'} ;
color: white;
width: 342px;
height: 68px;
margin-top: ${props => props.isGreen ? '50px' : '30px'} ;
border-radius: 12px;
margin-bottom: 30px;
cursor: pointer;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;

img{

margin-left: 5px;
width: 18px;
}





@media (max-width: 450px ) {
    
    
    width: 260px;
    
}


${props => props.isGreen && `

img{
    transform: rotateY(180deg);
    margin-right: 5px;
}
`}

`

