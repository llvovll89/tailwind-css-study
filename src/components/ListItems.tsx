import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";
import {ITEM_LIST} from "../data/Mock_item_list";

export const ListItems = () => {
    const {setSelectedMenuItem, selectedMenuItem} = useContext(GlobalContext);

    const handleClick = (item: string) => {
        setSelectedMenuItem(item);
    };

    const selectedItemStyle = (item: string) => {
        return item === selectedMenuItem
            ? "font-bold text-primary underline"
            : "";
    };

    return (
        <ul className="flex items-start flex-col gap-6 w-full">
            {ITEM_LIST.map((item) => (
                <li
                    key={item.id}
                    className={`${selectedItemStyle(
                        item.text
                    )} cursor-pointer transition-all`}
                    onClick={() => handleClick(item.text)}
                >
                    {item.text}
                </li>
            ))}
        </ul>
    );
};
