import React from 'react';

const Bank = ({i, pRef, bill, change}) => {
  return (
    <p ref={(el) => {pRef.current[i] = el}}>{bill}: {change[bill]}개</p>
  );
};

export default Bank;