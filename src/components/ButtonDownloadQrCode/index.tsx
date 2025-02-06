import { useRef, useState } from 'react'
import iconeQrcode from '../../assets/iconeQrcode.svg';
import { QRCodeCanvas } from 'qrcode.react';
import * as S from './styles'
import { MenuItem } from '@material-ui/core';
import { GlobalDialog } from '../GlobalDialog';
import { useHooks } from '../../hooks/useHooks';

interface Props {
  url: string
  onClose: () => void
}

export function ButtonDownloadQrCode({ url, onClose }: Props) {

  const { mediaQuery, translation } = useHooks()

  const qrcodeRef = useRef<HTMLDivElement | null>(null)
  const [estadoButton, setEstadoButton] = useState({ openModal: false, url: '' })

  const fechaDialog = () => {
    setEstadoButton({ openModal: false, url: '' })
    if (onClose) onClose()
  }

  const abreDialog = () => {
    setEstadoButton({ openModal: true, url:url })
  }

  const handleShare = async () => {
    const ref = qrcodeRef.current;
    const canvas = ref!.querySelector("canvas") as HTMLCanvasElement;

    if (canvas) {

      await navigator.share({
        title: 'QR Code',
        url: url
      });
    }
  }

  return (
    <>
      <MenuItem onClick={abreDialog}>
        <S.ImgBotaoQrCode src={iconeQrcode} alt="botao gerar qrcode"/>
        {String(translation("dialog_qr_code.titulo"))}
      </MenuItem>
      <GlobalDialog
        open={estadoButton.openModal}
        onClose={() => fechaDialog()}
        funcaoConfirmar={handleShare}
        funcaoCancelar={() => fechaDialog()}
        textoCancelar={translation("cancelar")}
        textoConfirmar={translation("dialog_qr_code.compartilhar")}>
        <S.QrCodeTitle mediaquery={mediaQuery}>
          {translation("dialog_qr_code.titulo")}</S.QrCodeTitle>
        <S.QrCodeInfo mediaquery={mediaQuery}>
          {translation("dialog_qr_code.informacao")}</S.QrCodeInfo>
        <S.DivQrCode ref={qrcodeRef} mediaquery={mediaQuery}>
          <QRCodeCanvas
            id="qrCode"
            value={estadoButton.url}
            size={mediaQuery ? 200 : 150}
            bgColor="#FFFFFF"
            fgColor="#000000"
            level="L"
            includeMargin={false} />
        </S.DivQrCode>
      </GlobalDialog>
    </>
  )
}
