import { useAppSelector } from "features/shared/hooks"

export const useThemeState = () => {
  const { darkMode } = useAppSelector((state) => state)

  return {
    darkMode,
  }
}
