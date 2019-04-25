export interface CredentialsVm {
    login: string;
    password: string;
  }
  
  export const createEmptyLogin = (): CredentialsVm => ({
    login: "",
    password: ""
  });