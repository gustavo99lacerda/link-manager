import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetLinks } from '../../../api/link/getLinks';
import { apiGetPaginaUrl } from '../../../api/pagina/getPaginaUrl';
import { CircularProgress } from '@material-ui/core';
import * as S from './styles'
import { useHooks } from '../../hooks/useHooks';
import defaultUser from '../../assets/defaultUser.jpg'


interface DadosPagina {
  idPagina: string
  titulo: string
  aparencia: {
    cor: {
      botao: string
      textoBotao: string
      texto: string
      fundo: string
    }
    background: string
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

const estadoInicial: DadosPagina = {
  idPagina: '',
  titulo: '',
  aparencia: {
    cor: {
      botao: '',
      textoBotao: '',
      fundo: '',
      texto: ''
    },
    background: '',
    foto: ''
  },
  links: [],
  url: ''
}

export const Pagina = () => {

  const { customUrl } = useParams<{ customUrl: string }>();
  const { mediaQuery } = useHooks()

  const [dadosPagina, setDadosPagina] = useState<DadosPagina>(estadoInicial)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    apiGetPaginaUrl(customUrl)
      .then((responsePagina: any) => {
        const dataPagina = responsePagina.data[0]

        setDadosPagina(prev => ({
          ...prev,
          idPagina: dataPagina.idPagina,
          titulo: dataPagina.titulo,
          aparencia: dataPagina.aparencia,
          url: dataPagina.url
        }))

        apiGetLinks(dataPagina.idPagina)
          .then((responseLinks: any) => {
            setDadosPagina(prev => ({
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
        : <S.Content
          mediaquery={mediaQuery}
          backgroundcolor={dadosPagina.aparencia.cor.fundo}
          background={dadosPagina.aparencia.background}>
          <S.DivImage mediaquery={mediaQuery}>
            <img src={dadosPagina.aparencia.foto ? dadosPagina.aparencia.foto : defaultUser} alt="imagem da página" />
            <div className="espaco-branco"></div>
          </S.DivImage>
          <S.NomePagina textcolor={dadosPagina.aparencia.cor.texto}>{dadosPagina.titulo}</S.NomePagina>
          <S.ListaLinks>
            {dadosPagina.links.filter(items => items.ativo === true).map((item) => (
              <S.ButtonsLinks
                key={item.idLink}
                mediaquery={mediaQuery}
                textcolor={dadosPagina.aparencia.cor.textoBotao}
                background={dadosPagina.aparencia.cor.botao}
                onClick={() => window.open(`https://${item.url}`, '_blank')} >
                <span style={{ marginLeft: "auto", marginRight: "auto" }}> {item.descricao}</span>
              </S.ButtonsLinks>
            ))}
          </S.ListaLinks>
        </S.Content>}
    </>
  )
}