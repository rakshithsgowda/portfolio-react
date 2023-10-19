import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useMenuStore = create()(
  persist(
    (set) => ({
      isOpen: true,
      toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
      closeMobileMenu: () => set((state) => ({ isOpen: false })),
    }),
    { name: 'menu-store' }
  )
)
