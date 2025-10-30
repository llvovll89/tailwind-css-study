import React, {useState} from "react";
import {GlobalContext} from "./GlobalContext";

export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
        null
    );

    return (
        <GlobalContext.Provider value={{selectedMenuItem, setSelectedMenuItem}}>
            {children}
        </GlobalContext.Provider>
    );
};
