import React, { useContext } from 'react';
import { FontSizeContext } from './FontSizeContext';

const ChildComponent = () => {

  const {state, actions} = useContext(FontSizeContext)

  return (
    <div>
      <p style={{fontSize: state.fontSize}}>😒</p>
      <button onClick={() => actions.setFontSize("100px")}>글자 크기 변경!</button>
    </div>
  );
};

export default ChildComponent;