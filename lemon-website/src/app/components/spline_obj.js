"use client";

import Spline from "@splinetool/react-spline";

export default function SplineObj() {
    return (
        <Spline
            className="w-full h-full pointer-events-none"
            scene="/scene.splinecode"
            onLoad={(spline) => {
                spline.setZoom(0.8);
            }}
        />
    );
}