import { create } from "zustand";
import { combine } from "zustand/middleware"

// 기본 구조
// const store = create(combine(
//   {
//     // 초기상태값
//   },
//   (set) => ({
//     // setter
//   })
// )) //{}, set()

const useCountStore = create(combine(
  {
    count: 0
  },
  (set) => ({
    // set을 통해 상태를 가져온 뒤 그 상태를 어떻게 변화시킬 건지 ()안에 넣기
    decrease: () => set((state) => ({count: state.count - 1 })), // count에서 {}는 {}안의 문장을 리턴하기 위해 사용한 것
    increase: () => set((state) => ({count: state.count + 1}))
  })
))

export default useCountStore; // 외부에서 사용하기 위해 export