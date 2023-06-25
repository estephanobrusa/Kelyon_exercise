import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface user {
    email: string
    password: string
}
interface LoginStore  {
  user: user | null,
  isLoggedIn: boolean;
  login: (user : user) => void;
  logout: () => void;
};

const initialState = {
    user: null
}

export const useLoginStore = create<LoginStore>()(
  devtools(
    persist(
      (set) => ({
        user: initialState.user,
        isLoggedIn: false,
        login: (user) => {
            set({ isLoggedIn: true }),
            set({ user: user })
        },
        logout: () => {
            set({ isLoggedIn: false }),
            set({ user: initialState.user })
        }
      }),
      {
        name: 'login-storage',
      }
    )
  )
)