import React, { useState } from "react";

const MovingButton = () => {
  let initialTop = 522;
  let initialLeft = 890;
  let isMobile = window.innerWidth <= 768;
  let isLowWidth = window.innerWidth == 1366;

  if (isMobile) {
    initialTop = 458;
    initialLeft = 120;
  } else if (isLowWidth) {
    initialTop = 458;
    initialLeft = 620;
  }

  const [top, setTop] = useState(initialTop);
  const [left, setLeft] = useState(initialLeft);

  const handleClick = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    let newTop = Math.random() * (windowHeight - 50);
    let newLeft = Math.random() * (windowWidth - 200);
    if (isMobile) {
      newTop = Math.min(newTop, windowHeight - 50);
      newTop = Math.max(newTop, 0);
      newLeft = Math.min(newLeft, windowWidth - 220);
      newLeft = Math.max(newLeft, 0);
    } else {
      newLeft = Math.min(newLeft, windowWidth - 100);
      newTop = Math.max(newTop, 0);
    }

    setTop(newTop);
    setLeft(newLeft);
  };

  const buttonStyle: React.CSSProperties = {
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`,
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => handleClick()}
    >
      Não
    </button>
  );
};

export default MovingButton;
