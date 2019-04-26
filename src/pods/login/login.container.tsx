import * as React from "react";
import { LoginComponent } from "./login.component";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routesLinks } from "core";
import { CredentialsVm, createEmptyLogin } from './login.vm';
import { validateCredentials } from "./login.api";
import { NotificationComponent } from "common/components";

interface Props extends RouteComponentProps {

}

const LoginContainerInner = (props: Props) => {
  const [credentials, setCredentials] = React.useState<CredentialsVm>(createEmptyLogin());

  const [showLoginFailedMessage, setShowLoginFailedMessage] = React.useState(false);
  const { history } = props;

  const doLogin = () => {
    console.log(credentials);
    validateCredentials(credentials.login, credentials.password).then(
      (areValidCredentials) => {
        (areValidCredentials) ?
          history.push(routesLinks.hotelCollection)
          :
          setShowLoginFailedMessage(true);
      }
    );

  }

  const onUpdateCredentialsField = (name: keyof CredentialsVm, value: string) => {
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }
  return (
    <>
      <LoginComponent
        onLogin={doLogin}
        credentials={credentials}
        onUpdateCredentials={onUpdateCredentialsField}
      />
      <NotificationComponent
        message="Invalid login or password, type: admin/test"
        show={showLoginFailedMessage}
        onClose={() => setShowLoginFailedMessage(false)}
      />
    </>
  );
};

export const LoginContainer = withRouter<Props>(LoginContainerInner);
