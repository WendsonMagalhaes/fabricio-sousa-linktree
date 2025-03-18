import { useState, useEffect } from "react";
import "./NumberCount.css";

// Função para formatar o número com 2 casas decimais e adicionar mil ou mi
const formatNumber = (num) => {
    let formattedNum;

    if (num >= 1000000) {
        formattedNum = (num / 1000000).toFixed(2).replace('.', ','); // Substitui o ponto por vírgula
        formattedNum = formattedNum.replace(/,00$/, ''); // Remove zeros à direita se for 00
        formattedNum = formattedNum.replace(/0$/, ''); // Remove zeros à direita se for 00

        return formattedNum + ' mi'; // Exibe até 2 casas decimais
    } else if (num >= 1000) {
        formattedNum = (num / 1000).toFixed(2).replace('.', ','); // Substitui o ponto por vírgula
        formattedNum = formattedNum.replace(/,00$/, ''); // Remove zeros à direita se for 00
        formattedNum = formattedNum.replace(/0$/, ''); // Remove zeros à direita se for 00

        return formattedNum + ' mil'; // Exibe até 2 casas decimais
    } else {
        formattedNum = num.toFixed(2).replace('.', ','); // Substitui o ponto por vírgula
        formattedNum = formattedNum.replace(/,00$/, ''); // Remove zeros à direita se for 00
        formattedNum = formattedNum.replace(/0$/, ''); // Remove zeros à direita se for 00

        return formattedNum; // Exibe até 2 casas decimais para números menores que mil
    }
};

const NumberCount = ({ iconClass, endValue, text }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startValue = 0;
        const duration = 2000; // Tempo total de animação em milissegundos
        const increment = endValue / (duration / 100); // Incremento por intervalo
        const counter = setInterval(() => {
            startValue += increment;
            setCount(Math.round(startValue)); // Arredonda para não ter valores quebrados
            if (startValue >= endValue) {
                clearInterval(counter);
                setCount(endValue); // Garante que o contador chegue exatamente ao valor final
            }
        }, 100); // A cada 100ms

        return () => clearInterval(counter);
    }, [endValue]);

    return (
        <div className="number-count">
            <i className={iconClass}><span className="num">{formatNumber(count)}</span></i>

            <span className="text">{text}</span>
        </div>
    );
};

export default NumberCount;
