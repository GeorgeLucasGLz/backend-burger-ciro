import React from "react";

import { ContainerItens as Container } from "./styles";

function ContainerItens({ children, isGreen }) {

    return <Container containerGreen={isGreen}>{children}</Container>

}

export default ContainerItens