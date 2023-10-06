import React, { useState } from 'react';

const MovingButton = () => {
const [top,setTop] = useState(522);
const [left,setLeft] = useState(884);

const handleClick = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Gerar coordenadas aleatórias dentro da janela do navegador
    const newTop = Math.random() * (windowHeight - 50); // Subtrai 50 para manter o botão visível na tela
    const newLeft = Math.random() * (windowWidth - 100); // Subtrai 100 para manter o botão visível na tela

    setTop(newTop);
    setLeft(newLeft);
  };

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
  };

    return (
        <button style={buttonStyle} onClick={() => handleClick()}>
        Não
      </button>
    )
}

export default MovingButton;
