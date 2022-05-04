import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

function GameParameter() {
  const { contextStart, contextTarget } = useContext(AppContext);

  return (
    <div className="GameParameters">
      <img
        src={contextStart ? contextStart : "/logo192.png"}
        className="startImage"
        alt="Starting"
      />
      <img
        src={contextTarget ? contextTarget : "/logo192.png"}
        className="targetImage"
        alt="Target"
      />
    </div>
  );
}

export default GameParameter;
