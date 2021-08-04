import { FC } from "react";

import "./FloatStyles.scss";

type LightButtonProps = {
  isLightMode?: boolean;
  handleLightButtonClick?: () => void;
};

export const GenerateLightButton: FC<LightButtonProps> = ({
  isLightMode,
  handleLightButtonClick,
}) => {
  return (
    <button
      className={isLightMode ? "Gen-Button-Float" : "Gen-Button-Float-Dark"}
      onClick={handleLightButtonClick}
    ></button>
  );
};
