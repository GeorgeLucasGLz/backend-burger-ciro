import React from "react";

import { Button as Btn } from "./styles";

function Button({ children, btnGreen, ...rest }) {

    return (

        <Btn {...rest} isGreen={btnGreen}>{children}</Btn >
    )

}

export default Button