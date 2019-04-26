import * as React from 'react';

export interface SessionContextProps {
    login: string;
    updateLogin: (value: string) => void;
}

export const createDefaultUser = (): SessionContextProps => ({
    login: 'no user',
    updateLogin: value =>
        console.log('if you are reading this, likely you forgot to add provider on top')
});

export const sessionContext = React.createContext<SessionContextProps>(createDefaultUser());

//mantiene la sesion a todas las paginas y los children son los componentes

export const SessionProvider: React.FunctionComponent = props => {
    const [login, setLogin] = React.useState("");

    return (
        <sessionContext.Provider value={{ login, updateLogin: setLogin }}>
            {props.children}
        </sessionContext.Provider>
    )
}