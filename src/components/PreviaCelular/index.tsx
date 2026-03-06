import { useEffect, useState } from 'react'
import * as S from './styles'
import { PreviaCelularSvg } from '../../assets/imgComponents/PreviaCelularSvg'
import { useRedux } from '../../hooks/useRedux'
import { CircularProgress } from '@material-ui/core'
import defaultUser from '../../assets/defaultUser.jpg'

interface IDadosPreviaCelular {
  idPagina: string
  titulo: string
  aparencia: {
    foto: string
    background: string
    cor: {
      botao: string
      texto: string
      textoBotao: string
      fundo: string
    }
  }
  links: Array<{
    idLink: string
    ordem: number
    descricao: string
    url: string
    ativo: boolean
  }>
}

const estadoInicial: IDadosPreviaCelular = {
  titulo: '',
  idPagina: '',
  links: [],
  aparencia: {
    cor: {
      botao: '',
      textoBotao: '',
      fundo: '',
      texto: ''
    },
    background: '',
    foto: ''
  }
}

export function PreviaCelular() {

  const { useAppSelect } = useRedux()

  const { paginas, paginaCompleta, identificadores } = useAppSelect

  const [dadosPrevia, setDadosPrevia] = useState<IDadosPreviaCelular>(estadoInicial)

  useEffect(() => {
    setDadosPrevia(paginaCompleta)
  }, [paginas.length, paginaCompleta])

  return (
    <S.ContentMolde backgroundprevia={dadosPrevia.aparencia.cor.fundo} background={dadosPrevia.aparencia.background}>
      {identificadores.carregandoPrevia
        ? <CircularProgress color="primary" style={{ margin: "100%" }} className="margin-auto" />
        : paginas.length > 0 && paginaCompleta.idPagina !== ''
          ? <>
            <div className="cell">
              <PreviaCelularSvg />
              <img src={dadosPrevia.aparencia.foto ? dadosPrevia.aparencia.foto : defaultUser} alt="foto da pagina" className="imagem-previa" />
              <S.Titulo color={dadosPrevia.aparencia.cor.texto}>
                {dadosPrevia.titulo}
              </S.Titulo>
              {dadosPrevia.links.length > 0 ?
                dadosPrevia.links.filter(itens => itens.ativo === true).map(item => (
                  <S.Links
                    textoBotao={dadosPrevia.aparencia.cor.textoBotao}
                    backgroundcolor={dadosPrevia.aparencia.cor.botao === null ? "#000000" : dadosPrevia.aparencia.cor.botao}
                    key={item.idLink}
                    color={dadosPrevia.aparencia.cor.texto} >
                    {item.descricao}
                  </S.Links>
                ))
                : null
              }
            </div>
          </>
          : null}
    </S.ContentMolde>
  )
}
