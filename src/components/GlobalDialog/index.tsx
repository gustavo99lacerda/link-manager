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
  inLoading?: boolean
  disabled?: boolean
  disabledConfirmation?: boolean
  actions?: boolean
}

export function GlobalDialog({
  open,
  onClose,
  funcaoCancelar,
  funcaoConfirmar,
  textoCancelar,
  textoConfirmar,
  inLoading,
  children,
  disabled,
  disabledConfirmation,
  actions
}: IProps) {

  return (
    <S.StyledDialog
      closeAfterTransition={false}
      open={open}
      onClose={!disabled ? onClose : undefined}>
      <IconButton color="primary" onClick={!disabled ? onClose : undefined}>
        <HighlightOff fontSize='medium' />
      </IconButton>
      <div className="content">
        {children}
      </div>
      {actions === undefined || actions === true ? (
        <div className="space-actions-dialog">
          {inLoading ? <CircularProgress color="primary" className="margin-auto" /> : (
            <>
              {funcaoCancelar ? (
                <Button color="primary" fullWidth variant="outlined" onClick={!disabled ? funcaoCancelar : undefined}>
                  {textoCancelar}
                </Button>
              ) : null}
              {funcaoConfirmar ? (
                <Button disabled={disabledConfirmation} fullWidth color="primary" variant="contained" onClick={!disabled ? funcaoConfirmar : undefined}>
                  {textoConfirmar}
                </Button>
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </S.StyledDialog>
  )
}
