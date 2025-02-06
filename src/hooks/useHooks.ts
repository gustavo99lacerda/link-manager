import { useMediaQuery, useTheme } from "@material-ui/core"
import { useTranslation } from "react-i18next"

export function useHooks() {
  const theme = useTheme()
  const { t } = useTranslation()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return {
    mediaQuery: matches.toString(),
    translation: t,
  }
}
