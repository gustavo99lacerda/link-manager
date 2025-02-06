import * as S from './styles'

interface IDadosPreviaCelular {
  idPagina: string
  titulo: string
  aparencia: {
    foto: string
    bordaBotao: string,
    cor: {
      botao: string
      texto: string
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
    bordaBotao: "",
    cor: {
      botao: '',
      fundo: '',
      texto: ''
    },
    foto: ''
  }
}

export function PreviaCelular() {

  // const { useAppSelect, dispatch } = useRedux()

  // const { paginaCompleta, identificadores, paginas } = useAppSelect

  // const [dadosPrevia, setDadosPrevia] = useState<IDadosPreviaCelular>(estadoInicial)

  // useEffect(() => {
  //   if (paginas.length === 0) {
  //     setDadosPrevia(estadoInicial)
  //     dispatch(resetIndentificadores())
  //     dispatch(resetPaginaCompleta())
  //   } else {
  //     setDadosPrevia(paginaCompleta)
  //   }
  // }, [paginaCompleta, paginas.length, identificadores.linkAdicionadoOuRemovido])

  // const retornaRadius = () => {
  //   switch (paginaCompleta.aparencia.bordaBotao) {
  //     case "RETA": return "0px"
  //     case "REDONDA": return "20px"
  //     case "SEMIREDONDA": return "14px"
  //     default: return "0px"
  //   }
  // }

  return (
    <S.ContentMolde>

      {/* {paginas.length > 0 ? <><S.DivUrlbutton>
        <span className="url-page">Casalinks: {process.env.REACT_APP_PRE_URL}/{identificadores.linkPaginaSelecionada}</span>
      </S.DivUrlbutton>

        <div className="cell">
          <PreviaCelularSvg />
          {dadosPrevia.titulo !== ''
            ? <>
              {dadosPrevia.aparencia !== null && dadosPrevia.aparencia.foto !== ""
                ? <img src={dadosPrevia.aparencia.foto} alt="foto da pagina" className="imagem-previa" />
                : <S.SemFoto width='111px' height='111px' margin='66px 0px 0px 0px'>{paginaCompleta.titulo.slice(0, 1)}</S.SemFoto>}
              <S.Titulo color={dadosPrevia.aparencia !== null ? dadosPrevia.aparencia.cor.texto : "#000000"}>
                {dadosPrevia.titulo}
              </S.Titulo>
              {dadosPrevia.links.length > 0 ?
                dadosPrevia.links.filter(itens => itens.ativo === true).map(item => (
                  <S.Links
                    radius={retornaRadius()}
                    backgroundcolor={dadosPrevia.aparencia.cor.botao === null ? "#000000" : dadosPrevia.aparencia.cor.botao}
                    key={item.idLink}
                    color={dadosPrevia.aparencia.cor.texto} >
                    {item.descricao}
                  </S.Links>
                ))
                : null
              }
            </>
            : null}
        </div>
      </>
        : null} */}
    </S.ContentMolde>
  )
}
