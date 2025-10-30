import {createContext} from "react";

interface GlobalContextProps {
    selectedMenuItem: string | null;
    setSelectedMenuItem: (item: string | null) => void;
}

export const GlobalContext = createContext<GlobalContextProps>({
    selectedMenuItem: null,
    setSelectedMenuItem: () => {},
});
