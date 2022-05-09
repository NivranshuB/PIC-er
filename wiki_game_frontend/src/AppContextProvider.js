import React from "react";
import useGet from "./useGet";

// Create the context
const AppContext = React.createContext({
  articles: [],
});

function AppContextProvider({ children }) {
  // Utilize our useGet hook to query our Express API for the articles.
  const gameParameterGet = useGet("/api/game", []);
  console.log("Game parameter objects are: ");
  console.log(gameParameterGet.data);

  // The context value that will be supplied to any descendants of this component.
  const contextStart = gameParameterGet.data[0];
  const contextTarget = gameParameterGet.data[1];

  // Utilize our usePut hook to query our Express API for the articles.
  const nextLevelImages = useGet("/api/game/ongoing", []);
  console.log("Level objects are: ");
  console.log(nextLevelImages.data);

  // The context value that will be supplied to any descendants of this component.
  const levelImages = nextLevelImages.data;

  // Wraps the given child components in a Provider for the above context.
  return (
    <AppContext.Provider value={{ contextStart, contextTarget, levelImages }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
