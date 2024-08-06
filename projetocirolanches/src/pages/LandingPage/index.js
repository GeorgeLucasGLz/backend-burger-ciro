import React from "react";
import axios from "axios";
import FireVideo from '../../assets/burgerVideo.mp4'
import Logo from '../../assets/logo.webp'
import Insta from '../../assets/insta.webp'
import { CSS } from "../../index.css";
import { useHistory } from "react-router-dom";

/*---Geral---*/
import {
    Body,
    Mask,
    HeroSection,
    HeroImageBox,
    HeroP,
    HeroTitle,
    TitleSpan,
    HeroInfoSide,
    HeroImageSide

} from './styles'

/*---Header---*/
import {
    Header,
    LogoBox
} from "../../components/LandingPageComponents/Header/styles";

/*---Buttons---*/
import {
    ButtonLeftSide,
    ButtonHeader,
    BoxInsta

} from '../../components/LandingPageComponents/Buttons/styles'




const LandingPage = () => {

    const history = useHistory()

    function makeOrder() {

        history.push('/menu')

    }

    return (
        <Body>
            <a href="https://www.instagram.com/cirolancheses/" target="blank">
                <BoxInsta src={Insta}></BoxInsta>
            </a>
            <Header>
                <LogoBox src={Logo}></LogoBox>
                <a href="https://api.whatsapp.com/send?phone=5527999655756" target="blank">
                    <ButtonHeader>Contato</ButtonHeader>
                </a>
            </Header>

            <Mask></Mask>
            <video className="fire-video" src={FireVideo} autoPlay muted loop>

            </video>


            <HeroSection>
                <HeroInfoSide>
                    <HeroTitle>Uma Explosão de Sabores em Cada <TitleSpan>HAMBÚRGUER!</TitleSpan></HeroTitle>
                    <HeroP>Experimente a combinação perfeita de ingredientes frescos e carnes suculentas em nossos hambúrgueres artesanais.</HeroP>
                    <ButtonLeftSide onClick={makeOrder}>FAZER PEDIDO</ButtonLeftSide>
                </HeroInfoSide>

                <HeroImageSide>
                    <HeroImageBox src={Logo}></HeroImageBox>
                </HeroImageSide>
            </HeroSection>

        </Body>
    )
}

export default LandingPage