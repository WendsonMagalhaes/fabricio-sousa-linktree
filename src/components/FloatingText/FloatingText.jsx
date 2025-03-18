import { useEffect } from "react";
import "@fontsource/baloo-2";
import "./FloatingText.css";

const FloatingText = ({ texto }) => {
    useEffect(() => {
        document.body.classList.add("body-style");
    }, []);

    return (
        <p className="floating-text">
            {texto}
            <span className="floating-dot">.</span>
        </p>
    );
};

export default FloatingText;
