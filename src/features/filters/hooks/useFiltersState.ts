import { useAppSelector } from "features/shared/hooks"

export const useFiltersState = () => {
  const { filters } = useAppSelector((state) => state)

  return {
    filters,
  }
}
