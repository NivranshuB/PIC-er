import GameImageSet from "./GameImageSet";
import GameParameter from "./GameParameter";

function GameComponent() {
    return (
        <>
            <GameParameter tagsVisible={true}/>
            <GameImageSet tagsVisible={true}/>
        </>
    )
}

export default GameComponent;