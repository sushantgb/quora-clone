import React, { useContext, useState} from "react";

/* creating context */
const AppContext = React.createContext();
/* defining provider */
const ContextProvider = ({ children }) => {
    /* changeable state for the context */
    const [contextValue, setContextValue] = useState('All');
    return (
        <AppContext.Provider value={[contextValue, setContextValue]}>
            { children }
        </AppContext.Provider>
    );
};

/* custom global context hook to access easily through the app */
const useGlobalContext = () =>{
    return useContext(AppContext);
}


export { AppContext, ContextProvider, useGlobalContext };