import { createContext } from "react";

export const AppContext = createContext(null);
export const AppContextProvider = (props) => {
    const contextValue = {
        // Define your context values here
    };

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>;
    
}