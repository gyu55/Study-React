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
      insert: () => {
        
      },
      remove: () => {}
    }
  }

  // 실습
  // insert 메서드를 완성하시오!
  // 1. makeAniamlButton에서 받아온 값으로 버튼 생성
  // 2. 
  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


