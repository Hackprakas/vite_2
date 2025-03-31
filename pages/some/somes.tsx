import React, { useState, useEffect } from "react";

function Somes() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        async function fetchData() {
            console.log("hello from compo");
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage("somes");
        }

        fetchData();
    }, []);

    return <div>{message}</div>;
}

export default Somes;
