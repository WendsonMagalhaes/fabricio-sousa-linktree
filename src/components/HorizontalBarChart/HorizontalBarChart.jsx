import React from 'react';
import './HorizontalBarChart.css';

const HorizontalBarChart = ({ data }) => {
    return (
        <div className="bar-chart-container">
            {data.map((item, index) => (
                <div key={index} className="bar-item">
                    <div className="bar-label">
                        <span className="bar-title">{item.title}</span>
                        <span className="bar-percentage">{item.percentage}%</span>
                    </div>
                    <div className="bar-background">
                        <div
                            className="bar-progress"
                            style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HorizontalBarChart;
