import React from 'react';

const InputHooks = () => {
  
  const [value, onChangeValue] = useInput("")

  return (
    <div>
      <p>{value}</p>
      <input type="text" onChange={onChangeValue}/>
    </div>
  );
};

export default InputHooks;