import { useHooks } from '../../hooks/useHooks'
import { useRouter } from '../../hooks/useRouter'
import { useRedux } from '../../hooks/useRedux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as S from './styles'

export function Visualizacao() {

  const { useAppSelect } = useRedux()
  const { mediaQuery } = useHooks()
  const { history } = useRouter()

  const { paginaCompleta } = useAppSelect

  return (
    <S.Content mediaquery={mediaQuery} backgroundcolor={paginaCompleta.aparencia.cor.fundo}>              
      <S.DivImageButton>
        <S.BotaoVoltar onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </S.BotaoVoltar>
        {paginaCompleta.aparencia.foto === ""
          ? <S.SemFoto
            textcolor={paginaCompleta.aparencia.cor.texto}
            background={paginaCompleta.aparencia.cor.botao}   >
            <span>{paginaCompleta.titulo.substring(0, 1).toUpperCase()}</span>
          </S.SemFoto>
          : <img src={paginaCompleta.aparencia.foto} alt="imagem da página" />}
        <div className="espaco-branco"></div>
      </S.DivImageButton>
      <S.NomePagina textcolor={paginaCompleta.aparencia.cor.texto}>{paginaCompleta.titulo}</S.NomePagina>
      <S.ListaLinks>
        {paginaCompleta.links.filter(items => items.ativo === true).map((item) => (
          <S.ButtonsLinks
            key={item.idLink}
            textcolor={paginaCompleta.aparencia.cor.texto}
            background={paginaCompleta.aparencia.cor.botao}
            onClick={() => window.open(`https://${item.url}`, '_blank')} >
              <img src='src\assets\Logos\whatsapp-svgrepo-com.svg'style={{ width: "40px", height: "40px"}}/>
              <span style={{marginLeft: "auto", marginRight: "auto"}}> {item.descricao}</span>
            
          </S.ButtonsLinks>
        ))}
      </S.ListaLinks>
    </S.Content>
  )
}
