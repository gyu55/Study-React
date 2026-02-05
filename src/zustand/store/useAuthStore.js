import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const initialMember = {
  memberEmail: "",
  memberPassword: "",
  memberName: "",
};

const useAuthStore = create(
  persist(
    combine(
      // persist
      {
        isLogin: false,
        currentMember: initialMember,
        previousUrl: "/",
      },
      (set) => ({
        setIsLogin: (loginStatus) =>
          set((state) => ({
            // ...state, // 기존 상태들은 그대로 두고 (생략가능)
            isLogin: loginStatus,
          })),
        setCurrentMember: (member) =>
          set((state) => ({
            currentMember: member, // currentMember에 화면에서 받은 member를 받아라
          })),
        setPreviousUrl: (url) =>
          set((state) => ({
            previousUrl: url,
          })),
      })
    ),
    {
      name: "memeber-store", // 로컬스토리지에 표현되는 이름
    }
  )
);

export default useAuthStore;
