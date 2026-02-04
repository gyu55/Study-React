import { createContext, useState } from "react";

// 1. 생성 
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
export const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {
      animals
    },
    actions: {
      insert: (animal) => {
        setAnimals(animals.concat(animal)) // 스프레드 or concat
      },
      remove: (animal) => {
        // filter method -> rmvAnimal이 누른 버튼의 animal이랑 같지 않을 경우
        // 즉, 같지 않은 걸로만 새 배열을 만듦. -> 삭제된 것처럼 보이는 효과
        setAnimals(animals.filter((rmvAnimal) => rmvAnimal !== animal))
        // 강사님 권장 방식
        // remove: (i) => { setAnimals(animals.filter((_, idx) => i !== idx)) }
      }
      // remove 구현 어떤 식? 
      // 1. 일단 삭제 버튼 만듦
      // 1-1). remove가 어떤 값을 받게 할 것인지 ex. 버튼 텍스트, 버튼태그 자체
      //        만약 버튼 태그 자체라면 id 부여? -> 버튼 텍스트를 받도록 했음 (innerText)
      //        강사님 피드백 ) 텍스트는 중복될 수 있으므로 index 사용 권장
      // 2. 생성된 버튼 누를 시, 해당 버튼 삭제
    }
  }

  // 실습
  // insert 메서드를 완성하시오!
  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


