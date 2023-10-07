import React, { MouseEventHandler } from 'react';

const ButtonComp = ({ text, onClick }: { text?: string, onClick?: MouseEventHandler<HTMLButtonElement> | undefined  }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default ButtonComp;
