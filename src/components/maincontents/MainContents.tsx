import {useContext} from "react";
import {GlobalContext} from "../../context/GlobalContext";
import {Intro} from "./Intro";
import {Directions} from "./Directions";
import {Customizing} from "./Customizing";

export const MainContents = () => {
    const {selectedMenuItem} = useContext(GlobalContext);
    const renderContent = () => {
        switch (selectedMenuItem) {
            case "1. 테일윈드css 4.1 소개":
                return <Intro />;
            case "2. 테일윈드css 4.1 사용법":
                return <Directions />;
            case "3. 테일윈드css 4.1 커스터마이징":
                return <Customizing />;
            default:
                return <span>내용이 없습니다.</span>;
        }
    };

    return (
        <main className="h-full w-full bg-white overflow-y-auto p-4">
            {renderContent()}
        </main>
    );
};
