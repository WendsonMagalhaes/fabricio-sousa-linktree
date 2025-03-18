import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Menu.css";

export default function Menu() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className={`menu ${isSticky ? "sticky" : ""}`}>
            {!isSidebarOpen && (
                <div className="menu-toggle" onClick={toggleSidebar}>
                    <FaBars className="icon" />
                </div>
            )}

            <ul className={`menu-list ${isSidebarOpen ? "open" : ""}`}>
                <div className="close-button" onClick={toggleSidebar}>
                    <FaTimes className="icon-close" />
                </div>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Quem sou eu?</a></li>
                <li><a href="#works">Alguns Trabalhos</a></li>
                <li><a href="#metrics">Métricas/Rede Social</a></li>
                <li><a href="#contact">Contatos</a></li>
            </ul>
        </nav>
    );
}
