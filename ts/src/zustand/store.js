import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultInfo = {
  username: "",
  profileImage: "",
  _id: 0,
  isLoggedIn: false,
  accessToken: "",
};

const useUserStore = create(
  persist(
    (set) => ({
      userInfo: defaultInfo,
      setUserInfo: (newUserInfo) => set({ userInfo: newUserInfo }),
      deleteUserInfo: () => {
        set({ userInfo: defaultInfo });
      },
    }),
    { name: "userIdStorage" }
  )
);

export default useUserStore;
