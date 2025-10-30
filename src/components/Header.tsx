import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

export const Header = () => {
    const {selectedMenuItem} = useContext(GlobalContext);

    return (
        <header className="h-[5%] w-full bg-white p-3 flex items-center justify-center font-bold text-lg">
            <h1>{selectedMenuItem}</h1>
        </header>
    );
};
