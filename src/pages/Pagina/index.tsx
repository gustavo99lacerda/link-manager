import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetLinks } from '../../../api/link/getLinks';
import { apiGetPaginaUrl } from '../../../api/pagina/getPaginaUrl';
import { CircularProgress } from '@material-ui/core';
import * as S from './styles'
import { useHooks } from '../../hooks/useHooks';

interface PaginaCompleta {
  idPagina: string
  titulo: string
  aparencia: {
    cor: {
      botao: string
      textoBotao: string
      texto: string
      fundo: string
    }
    foto: string
  }
  links: Array<{
    idLink: string
    ordem: number
    descricao: string
    url: string
    ativo: boolean
  }>
  url: string
}

const estadoInicial: PaginaCompleta = {
  idPagina: '',
  titulo: '',
  aparencia: {
    cor: {
      botao: '',
      textoBotao: '',
      fundo: '',
      texto: ''
    },
    foto: ''
  },
  links: [],
  url: ''
}

export const Pagina = () => {

  const { customUrl } = useParams<{ customUrl: string }>();
  const { mediaQuery } = useHooks()

  const [paginaCompleta, setPaginaCompleta] = useState<PaginaCompleta>(estadoInicial)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    apiGetPaginaUrl(customUrl)
      .then((responsePagina: any) => {
        const dataPagina = responsePagina.data[0]

        setPaginaCompleta(prev => ({
          ...prev,
          idPagina: dataPagina.idPagina,
          titulo: dataPagina.titulo,
          aparencia: dataPagina.aparencia,
          url: dataPagina.url
        }))

        apiGetLinks(dataPagina.idPagina)
          .then((responseLinks: any) => {
            setPaginaCompleta(prev => ({
              ...prev,
              links: responseLinks.data
            }))
            setCarregando(false)
          })
          .catch((error) => {
            console.log(error)
            setCarregando(false)
          })
      })
      .catch((error) => {
        console.log(error)
        setCarregando(false)
      })

  }, [customUrl])

  return (
    <>
      {carregando
        ? <CircularProgress color="primary" style={{ margin: "100%" }} />
        : <S.Content mediaquery={mediaQuery} backgroundcolor={paginaCompleta.aparencia.cor.fundo}>
          <S.DivImage mediaquery={mediaQuery}>
            {paginaCompleta.aparencia.foto === ""
              ? <S.SemFoto
                textcolor={paginaCompleta.aparencia.cor.texto}
                background={paginaCompleta.aparencia.cor.botao}   >
                <span>{paginaCompleta.titulo.substring(0, 1).toUpperCase()}</span>
              </S.SemFoto>
              : <img src={paginaCompleta.aparencia.foto} alt="imagem da página" />}
            <div className="espaco-branco"></div>
          </S.DivImage>
          <S.NomePagina textcolor={paginaCompleta.aparencia.cor.texto}>{paginaCompleta.titulo}</S.NomePagina>
          <S.ListaLinks>
            {paginaCompleta.links.filter(items => items.ativo === true).map((item) => (
              <S.ButtonsLinks
                key={item.idLink}
                mediaquery={mediaQuery}
                textcolor={paginaCompleta.aparencia.cor.textoBotao}
                background={paginaCompleta.aparencia.cor.botao}
                onClick={() => window.open(`https://${item.url}`, '_blank')} >
                <span style={{ marginLeft: "auto", marginRight: "auto" }}> {item.descricao}</span>
              </S.ButtonsLinks>
            ))}
          </S.ListaLinks>
        </S.Content>}
    </>
  )
}