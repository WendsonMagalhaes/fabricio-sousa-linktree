import React from "react";
import "./GraficMetric.css";
import PieChart from "../PieChart/PieChart";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";


const GraficMetric = () => {
    const dataGenero = [
        { color: '#672507', percentage: 77.8, title: 'MULHERES' },
        { color: '#FBB74F', percentage: 25.2, title: 'HOMENS' },

    ];
    const dataFaixEtaria = [
        { title: '17-21', percentage: 15, color: '#672507' },
        { title: '22-26', percentage: 50, color: '#672507' },
        { title: '27-31', percentage: 80, color: '#672507' },
        { title: '32-36', percentage: 60, color: '#672507' },
    ];
    const dataLocalidade = [
        { title: '17-21', percentage: 15, color: '#672507' },
        { title: '22-26', percentage: 50, color: '#672507' },
        { title: '27-31', percentage: 80, color: '#672507' },
        { title: '32-36', percentage: 60, color: '#672507' },
    ];

    return (
        <div className="grafic-metric">
            <div className="top-part">
                <h3>Gênero</h3>
                <div className="gender-graph">

                    <PieChart data={dataGenero} />

                </div>
            </div>
            <div className="bottom-part">
                <div className="left">
                    <h3>Faixa Etária</h3>
                    <div className="bar-container">
                        <HorizontalBarChart data={dataFaixEtaria} />

                    </div>
                </div>
                <div className="right">
                    <h3>Localidade</h3>
                    <div className="bar-container">
                        <HorizontalBarChart data={dataLocalidade} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraficMetric;
