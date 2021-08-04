import { FC } from "react";

import "./styles.scss";

type GenButtonProps = {
  isLightMode?: boolean;
  handleButtonClick?: () => void;
};

export const GenerateButton: FC<GenButtonProps> = ({
  isLightMode,
  handleButtonClick,
}) => {
  return (
    <button
      className={isLightMode ? "Gen-Button-Style" : "Gen-Button-Style-Dark"}
      onClick={handleButtonClick}
    >
      Generate New Article
    </button>
  );
};
