import { FC } from "react";

import { ButtonContainer } from "./StyledComponents";

const GenerateButton: FC = () => {
    return(
        <ButtonContainer>
            <button>Generate New Article</button>
        </ButtonContainer>
    );
};

export default GenerateButton;