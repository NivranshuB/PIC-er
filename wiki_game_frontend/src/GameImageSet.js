import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

function GameImageSet() {

  const { levelImages } = useContext(AppContext);

  return (
    <div className="GameImageSet">
      <img
        src={levelImages ? levelImages[0] : "/logo192.png"}
        className="levelImage"
        alt="Iteration image"
      />
      <img
        src={levelImages ? levelImages[1] : "/logo192.png"}
        className="levelImage"
        alt="Iteration image"
      />
      <img
        src={levelImages ? levelImages[2] : "/logo192.png"}
        className="levelImage"
        alt="Iteration image"
      />
      <img
        src={levelImages ? levelImages[3] : "/logo192.png"}
        className="levelImage"
        alt="Iteration image"
      />
      <img
        src={levelImages ? levelImages[4] : "/logo192.png"}
        className="levelImage"
        alt="Iteration image"
      />
    </div>
  );
}

export default GameImageSet;