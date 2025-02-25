import { useMediaQuery, useTheme } from "@material-ui/core"
import { FormHandles } from "@unform/core"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

export function useHooks() {
  const theme = useTheme()
  const formRef = useRef<FormHandles | null>(null)
  const { t } = useTranslation()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return {
    mediaQuery: matches.toString(),
    translation: t,
    formRef
  }
}
