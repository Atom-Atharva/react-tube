import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-4 shadow-lg">
            <div className="flex col-span-1">
                <img
                    className="h-8 cursor-pointer hover:shadow-inner"
                    alt="menu"
                    src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
                    onClick={() => toggleMenuHandler()}
                />
                <a href="/">
                    <img
                        className="h-8 mx-4"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    />
                </a>
            </div>
            <div className="col-span-10 ml-44 flex">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-1/2 px-4 p-2 border border-gray-400 rounded-l-full"
                />
                <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-200 hover:bg-gray-300">
                    <img
                        alt="Search"
                        className="h-6"
                        src="https://www.svgrepo.com/show/114667/search.svg"
                    />
                </button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    alt="user"
                    src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                />
            </div>
        </div>
    );
};

export default Head;
