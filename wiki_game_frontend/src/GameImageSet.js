import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

function GameImageSet() {

  const { levelImages } = useContext(AppContext);

  return (
    <div className="GameImageSet">
      <img
        src={levelImages.length ? levelImages[0] : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages.length ? levelImages[1] : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages.length ? levelImages[2] : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages.length ? levelImages[3] : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages.length ? levelImages[4] : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
    </div>
  );
}

export default GameImageSet;