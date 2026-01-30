import React from 'react';

const Sports = ({name, personnel}) => {
  return (
    <li>
      {name} = {personnel}명에서 경기
    </li>
  );
};

export default Sports;