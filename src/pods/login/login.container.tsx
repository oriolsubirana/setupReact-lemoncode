import * as React from "react";
import { LoginComponent } from "./login.component";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { routesLinks } from "core";
import {
  CredentialsVm,
  createEmptyLogin,
  LoginFormErrors,
  createDefaultLoginFormErrors
} from "./login.vm";
import { validateCredentials } from "./login.api";
import { NotificationComponent } from "common/components";
import { loginFormValidation } from "./login.validation";
import {
  FieldValidationResult,
  FormValidationResult
} from "lc-form-validation";

interface Props extends RouteComponentProps { }

const useFormErrors = () => {
  const [loginFormErrors, setLoginFormErrors] = React.useState<LoginFormErrors>(
    createDefaultLoginFormErrors()
  );
  const [showLoginFailedMessage, setShowLoginFailedMessage] = React.useState(
    false
  );

  return { loginFormErrors, setLoginFormErrors, showLoginFailedMessage, setShowLoginFailedMessage }
}

const LoginContainerInner = (props: Props) => {
  const [credentials, setCredentials] = React.useState<CredentialsVm>(
    createEmptyLogin()
  );

  const { loginFormErrors, setLoginFormErrors, showLoginFailedMessage, setShowLoginFailedMessage } = useFormErrors();
  const { history } = props;

  const doLogin = () => {
    loginFormValidation
      .validateForm(credentials)
      .then(formValidationResult =>
        handleFormValidationResult(formValidationResult)
      );
  };

  const handleFormValidationResult = (
    formValidationResult: FormValidationResult
  ) => {
    if (formValidationResult.succeeded) {
      doLoginServerRequest();
    } else {
      displayFormValidationErrors(formValidationResult);
    }
  };

  const doLoginServerRequest = () => {
    validateCredentials(credentials.login, credentials.password).then(
      areValidCredentials => {
        areValidCredentials
          ? history.push(routesLinks.hotelCollection)
          : setShowLoginFailedMessage(true);
      }
    );
  }

  const displayFormValidationErrors = (formValidationResult: FormValidationResult) => {
    alert("error, review the fields");
    const updatedLoginFormErrors = {
      ...loginFormErrors,
      ...formValidationResult.fieldErrors
    };
    setLoginFormErrors(updatedLoginFormErrors);
  }

  const onUpdateCredentialsField = (name: keyof CredentialsVm, value) => {
    setCredentials({
      ...credentials,
      [name]: value
    });

    loginFormValidation
      .validateField(credentials, name, value)
      .then(fieldValidationResult => {
        if (fieldValidationResult) {
          setLoginFormErrors({
            ...loginFormErrors,
            [name]: fieldValidationResult
          });
        }
      });
  };

  return (
    <>
      <LoginComponent
        onLogin={doLogin}
        credentials={credentials}
        onUpdateCredentials={onUpdateCredentialsField}
        loginFormErrors={loginFormErrors}
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
