import React from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import '../i18n'
import PaginaInicial from '../pages/PaginaInicial';
import { MinhasPaginas } from '../pages/MinhasPaginas';
import { EdicaoPagina } from '../pages/EdicaoPagina';
import { MinhaConta } from '../pages/MinhaConta';
import { Visualizacao } from '../pages/Visualizacao';
import { Login } from '../pages/Login';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Pagina } from '../pages/Pagina';

interface ProtectedRouteProps extends RouteProps {
  component: any
}

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


  const ProtectedRoute = (props: ProtectedRouteProps) => {

    const { component: Component, ...rest } = props;
    const autenticado = useSelector((state: RootState) => !!state.user.token);

    return (
      <Route
        {...rest}
        render={(props) =>
          autenticado ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/minhas-paginas" component={MinhasPaginas} />
      <ProtectedRoute exact path="/edicao-pagina" component={EdicaoPagina} />
      <ProtectedRoute exact path="/minha-conta" component={MinhaConta} />
      <ProtectedRoute exact path="/visualizacao" component={Visualizacao} />
      <Route path="/:customUrl" component={Pagina} />
    </Switch>
  )
};

export default Routes;
