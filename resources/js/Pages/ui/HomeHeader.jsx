import { useState } from "react";

export default function HomeHeader() {
    //  const [hideHeader, setHideHeader] = useState(false);

    //  function handleHideHeader() {
    //      setHideHeader((val) => !val);
    //  }

    return (
        <>
            <header
                className={`relative w-full pt-2 duration-150  bg-black h-14 border-t border-l border-r border-white overflow-hidden sm:rounded-t-md`}
            >
                <input
                    type="text"
                    className="block w-11/12 h-10 px-5 py-3 mx-auto text-sm bg-white border-gray-200 rounded-full focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search your favorite anime..."
                />
                <small
                    className="absolute px-[6px] text-red-500 bg-white rounded-full top-2 right-2 cursor-pointer"
                    onClick={() => {}}
                >
                    x
                </small>
            </header>
        </>
    );
}
