import {Header} from "./components/Header";
import {MainContents} from "./components/maincontents/MainContents";
import {Sidebar} from "./components/Sidebar";
import {GlobalProvider} from "./context/GlobalProvider";

function App() {
    return (
        <GlobalProvider>
            <section className="font-family-base w-screen h-screen bg-main-bg text-white flex items-center justify-center">
                <div className="shadow-modal rounded-[5px] overflow-hidden w-[60%] h-[90%] flex items-center text-black gap-2">
                    <Sidebar />

                    <div className="w-[75%] h-full flex flex-col gap-2">
                        <Header />
                        <MainContents />
                    </div>
                </div>
            </section>
        </GlobalProvider>
    );
}

export default App;
