import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Intro = () => {
  // query string을 가져오는 훅함수 -> react의 routerDOM이 가지고 있음
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("job"));

  const introduce = {
    developer: {
      name: "예스민균",
      salary: 3000,
      skills: ["HTML", "CSS", "JS", "REACT"],
    },
    police: {
      name: "약소훈",
      salary: 5000,
      skills: ["기침", "달리기", "태권도", "배드민턴"],
    },
    fireFighter: {
      name: "김유대",
      salary: 2,
      skills: ["운전", "화재진압", "입으로 물뿜기", "물대포"],
    },
  };

  // 각각의 직업에 맞는 소개페이지를 구성하세요.
  // p태그 이름(name)
  // p태그 연봉(salary)
  // li태그 skills 출력

  const data = searchParams.get("job"); // data에 searchParams.get("job") 지금 job정보 넣기
  console.log(introduce[data]); // introduce[data]는 배열 형태로 내부 출력됨
  // 이걸 어떻게 직업 단위로 나눌지?

  return (
    <div>
      소개 페이지!👍
      <p>이름: {introduce[data].name}</p>
      <p>연봉: {introduce[data].salary}</p>
      <ul>
          {
            introduce[data].skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))
          }
      </ul>
    </div>
  );
};

export default Intro;
