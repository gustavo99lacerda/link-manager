import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import '../i18n'
import PaginaInicial from '../pages/PaginaInicial';

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
    </Switch>
  )
};

export default Routes;
