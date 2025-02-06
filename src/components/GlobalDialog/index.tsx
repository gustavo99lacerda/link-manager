import React from 'react'
import { HighlightOff } from '@material-ui/icons'
import { IconButton, Button, CircularProgress } from '@material-ui/core'
import * as S from './styles'

interface IProps {
  open: boolean
  onClose: () => void
  funcaoCancelar?: () => void
  funcaoConfirmar?: () => void
  textoCancelar?: string
  textoConfirmar?: string
  children?: React.ReactNode
  disabled?: boolean
  inLoading?: boolean
  disabledConfirmation?: boolean
}

export function GlobalDialog({
  open,
  onClose,
  funcaoCancelar: cancelAction,
  funcaoConfirmar: confirmationAction,
  textoCancelar: textCancelBtn,
  textoConfirmar: textConfirmationBtn,
  children,
  inLoading,
  disabled,
  disabledConfirmation,
}: IProps) {

  return (
    <S.StyledDialog
      open={open}
      onClose={!disabled ? onClose : undefined}>
      <IconButton color="primary" onClick={!disabled ? onClose : undefined}>
        <HighlightOff fontSize='medium' />
      </IconButton>
      <div className="content">
        {children}
      </div>
      <div className="space-actions-dialog">
        {inLoading ? <CircularProgress color="primary" className="margin-auto" /> : (
          <>
            {cancelAction ? (
              <Button color="primary" fullWidth variant="outlined" onClick={!disabled ? cancelAction : undefined}>
                {textCancelBtn}
              </Button>
            ) : null}
            {confirmationAction ? (
              <Button disabled={disabledConfirmation} fullWidth color="primary" variant="contained" onClick={!disabled ? confirmationAction : undefined}>
                {textConfirmationBtn}
              </Button>
            ) : null}
          </>
        )}
      </div>
    </S.StyledDialog>
  )
}
