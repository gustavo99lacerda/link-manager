import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import '../i18n'
import PaginaInicial from '../pages/PaginaInicial';
import { MinhasPaginas } from '../pages/MinhasPaginas';
import { EdicaoPagina } from '../pages/EdicaoPagina';

const Routes = () => {

  const { i18n } = useTranslation()

  const languageDefault = navigator.language

  const mudarLinguagem = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }

  React.useEffect(() => {
    mudarLinguagem(languageDefault)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageDefault])

  return (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route exact path="/minhas-paginas" component={MinhasPaginas} />
      <Route exact path="/edicao-pagina" component={EdicaoPagina} />
    </Switch>
  )
};

export default Routes;
