import { useMediaQuery, useTheme } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

export function useHooks() {
  const theme = useTheme()
  //const dispatch = useDispatch()
  const { t } = useTranslation()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  const hooks = {
    //dispatch,
    mediaQuery: matches.toString(),
    translation: t
  }
  return hooks
}
