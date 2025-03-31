

import { useState } from "react";
import Somes from "./somes";

export default function Page() {
    console.log("hi");
    console.log("api key")
    const [name, setName] = useState("some");
    return (
        <div>
            <h1 className="text-amber-700">Dynamic Page</h1>
            <p>Movie name: {name}</p>
            <p>Movie price: some</p>
            <Somes />
        </div>
    );
}