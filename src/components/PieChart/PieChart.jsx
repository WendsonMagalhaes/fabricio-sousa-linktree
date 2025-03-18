import React from 'react';
import './PieChart.css';

const PieChart = ({ data }) => {
    // Função para calcular o ângulo com base na porcentagem
    const calculateAngles = () => {
        let startAngle = 0;
        return data.map((item) => {
            const endAngle = startAngle + (item.percentage / 100) * 360; // Calcula o ângulo final com base na porcentagem
            const angles = { ...item, start: startAngle, end: endAngle };
            startAngle = endAngle; // Atualiza o valor de start para o próximo segmento
            return angles;
        });
    };
    // Chama a função para calcular os ângulos de cada segmento
    const updatedData = calculateAngles();

    const createGradient = () => {
        return updatedData.map((item, index) => {
            const startAngle = `${item.start}deg`;
            const endAngle = `${item.end}deg`;
            // Adicionando a cor branca entre os segmentos
            return `${item.color} ${startAngle}, ${item.color} ${endAngle}, white ${endAngle}, white ${startAngle}`;
        }).join(', ');
    };

    const gradient = createGradient();

    return (
        <div className="pie-chart-container">
            <div className="pie-chart" style={{ background: `conic-gradient(${gradient})` }}>
                <div className="pie-chart-center"></div>
            </div>
            <div className="legend">
                {data.map((item, index) => (
                    <div key={index} className="legend-item" >
                        <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                        <div className="legend-text" style={{ color: item.color }}>
                            <span className="legend-percentage">{item.percentage}%</span>
                            <span className="legend-title" style={{ color: item.color }}>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChart;
