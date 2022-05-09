import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import TagList from "./TagList";

function GameParameter(props) {
  const { contextStart, contextTarget } = useContext(AppContext);

  return (
    <div className="GameParameters">
      <img
        src={contextStart ? contextStart.imageURL : "/logo192.png"}
        className="startImage"
        alt="Starting"
      />
      <img
        src={contextTarget ? contextTarget.imageURL : "/logo192.png"}
        className="targetImage"
        alt="Target"
      />
      <div className="tags">
        {contextStart && props.tagsVisible ? (
          <TagList tagArray={contextStart.imageTags} />
        ) : null}
        {contextTarget && props.tagsVisible ? (
          <TagList tagArray={contextTarget.imageTags} />
        ) : null}
      </div>
    </div>
  );
}

export default GameParameter;
