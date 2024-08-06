import styled from 'styled-components'

export const ContainerItens = styled.div`
border: 2px solid red;
border-radius: 10px;
padding-inline: 18px;
display: flex;
flex-direction: column;
height: 100%;
margin-bottom: 30px;
width: 380px;

@media (max-width: 450px ) {
    
    
    width: 300px;
    
}

${props => props.containerGreen && `
border: 2px solid green;
border-radius: 10px;
padding-inline: 20px;
display: flex;
flex-direction: column;
margin-bottom: 40px;
`}

`