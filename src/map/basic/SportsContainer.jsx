import React from "react";
import Sports from "./Sports";

const SportContainer = () => {
  const SportsList = [
    {
      name: "농구",
      personnel: 5,
    },
    {
      name: "축구",
      personnel: 11,
    },
    {
      name: "야구",
      personnel: 9,
    },
    {
      name: "배구",
      personnel: 6,
    },
    {
      name: "탁구",
      personnel: 2,
    },
  ];

  // 스포츠 경기 인원이 5명 이상인 스포츠만 화면에 출력
  // 컴포넌트를 분리하기

  const list = SportsList.filter((sports) => sports.personnel >= 5).map(({name, personnel}, i) =>  (
      <Sports key={i} name={name} personnel={personnel} />
  ));

  return (
    <ul>
      {list}
    </ul>
  );
};

export default SportContainer;
