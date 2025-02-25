import React from "react";
import "./Linktree.css";
import { FaInstagram, FaYoutube, FaTiktok, FaGlobe } from "react-icons/fa";
import imagem_01 from "../../asserts/imagens/imagem-01.png"
import logo_01 from "../../asserts/imagens/logo-01.png"





const Linktree = () => {
    return (
        <main className="gradient-background">
            <div className="container">
                <div className="profile">
                    <div className="profile-imagem">
                        <img src={imagem_01} alt="Foto do Blogueiro" className="profile-img" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-info-nome">
                            <div className="logo-container">
                                <img src={logo_01} alt="Logo do Blogueiro" className="profile-info-nome-img" />
                            </div>
                            <div className="name-container">
                                <h2 className="profile-info-nome-h2">Fabrício Sousa</h2>
                            </div>
                        </div>
                        <h4>Construindo conexões autênticas que geram proximidade, confiança e liderança entre público e marcas.</h4>
                        <div className="profile-info-rede-social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                            <a href="https://blogpessoal.com" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
                        </div>
                        <div className="profile-info-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Parcerias aqui!</a>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Linktree;