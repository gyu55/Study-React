// import React from 'react';

// const Attendance = ({name, present, money}) => {
//   return (
//     <li>
//       {name}({present})
//       현재 지각비: {money}
//     </li>
//   );
// };

// export default Attendance;





import React, { useState } from "react";

const Attendance = ({ name, isPresent }) => {
  const [color, setColor] = useState(false);

  const handleColorOnClick = () => {
    setColor(prev => !prev);
  };

  return (
    <li onClick={handleColorOnClick} style={{ color: color ? "blue" : "black", cursor: "pointer" }}>
      이름: {name} ({isPresent ? "출석" : "결석"})
    </li>
  );
};

export default Attendance;
