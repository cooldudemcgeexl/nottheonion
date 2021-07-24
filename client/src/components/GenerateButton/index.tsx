import { FC } from "react";

import "./styles.scss";

type GenButtonProps = {
  handleButtonClick?: () => void;
};

const GenerateButton: FC<GenButtonProps> = ({ handleButtonClick }) => {
  return (
    <button className="Gen-Button-Style" onClick={handleButtonClick}>
      Generate New Article
    </button>
  );
};

export default GenerateButton;
