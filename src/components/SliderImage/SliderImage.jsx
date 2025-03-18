import { useState, useEffect } from "react";
import "./SliderImage.css";

export default function SliderImage({ imageList = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (imageList.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        }, 3000); // Muda a cada 3 segundos

        return () => clearInterval(interval);
    }, [imageList]);

    if (imageList.length === 0) {
        return <p>Nenhuma imagem disponível</p>;
    }

    return (
        <div className="container-slider-image">
            <ul className="slides">
                {imageList.map((src, index) => (
                    <li key={index} className={index === activeIndex ? "active" : ""}>
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </li>
                ))}
            </ul>

            <ul className="thumbnails">
                {imageList.map((src, index) => (
                    <li key={index}>
                        <button onClick={() => setActiveIndex(index)}>
                            <img src={src} alt={`Thumbnail ${index + 1}`} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
