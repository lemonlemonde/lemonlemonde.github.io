"use client"

import React, { useState, useEffect } from "react";

export default function refresh({ pageName }) {
    const [ver, setVer] = useState("");

    useEffect(() => {
        // it's in /public
        fetch("/version.txt")
            .then((res) => res.text().trim())
            .then((text) => {
                setVer(text);
            });
    }, []);

    return (
        <div>
            {/* cache busting */}
            <script src={`${pageName}?v=${ver}`}></script>
        </div>
    );
}

