import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import TagList from "./TagList";

function GameImageSet(props) {
  const { levelImages } = useContext(AppContext);

  return (
    <div className="GameImageSet">
      <img
        src={levelImages ? levelImages[0].imageURL : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages ? levelImages[1].imageURL : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages ? levelImages[2].imageURL : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages ? levelImages[3].imageURL : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <img
        src={levelImages ? levelImages[4].imageURL : "/logo192.png"}
        className="levelImage"
        alt="Iteration"
      />
      <div className="tags">
        {levelImages && props.tagsVisible? (
          <TagList tagArray={levelImages[0].imageTags} />
        ) : null}
        {levelImages && props.tagsVisible ? (
          <TagList tagArray={levelImages[1].imageTags} />
        ) : null}
        {levelImages && props.tagsVisible ? (
          <TagList tagArray={levelImages[2].imageTags} />
        ) : null}
        {levelImages && props.tagsVisible ? (
          <TagList tagArray={levelImages[3].imageTags} />
        ) : null}
        {levelImages && props.tagsVisible ? (
          <TagList tagArray={levelImages[4].imageTags} />
        ) : null}
      </div>
    </div>
  );
}

export default GameImageSet;
