import React, { useState } from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
  const [fontSize, setFontSize] = useState("30px")
  const value = {
    color: "blue", 
    fontSize: fontSize, 
    setFontSize: setFontSize
  }

  return (
    <CharContext.Provider value={value}>
      <A />
    </CharContext.Provider>
  );
};

export default CharContainer;