import { useState } from "react";

export const AsyncAwait = () => {
  const [text, setText] = useState('');

  const handleClick = async () => setText(() => 'My text...');

  return (
    <div className={`border border-white p-3`}>
      <button onClick={() => handleClick()} 
      className={`border border-white p-3`}>
        Click
      </button>
      <br/><br/>
      <p>{text}</p>
    </div>
  );
};