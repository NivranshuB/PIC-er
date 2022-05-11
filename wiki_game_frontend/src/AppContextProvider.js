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
  const contextStart = gameParameterGet.data.startImage;
  const contextTarget = gameParameterGet.data.targetImage;

  // Utilize our usePut hook to query our Express API for the level images.
  // Not implemented in frontend

  // The context value that will be supplied to any descendants of this component.
  const levelImages = gameParameterGet.data.levelImages;

  // Wraps the given child components in a Provider for the above context.
  return (
    <AppContext.Provider value={{ contextStart, contextTarget, levelImages }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
