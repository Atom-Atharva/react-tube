import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="px-24 py-6">
            <iframe
                width="976"
                height="549"
                className="rounded-xl"
                src={
                    "https://www.youtube.com/embed/" +
                    searchParams.get("v") +
                    "?si=Jb4TyPbW-xxmZrLS"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchPage;
