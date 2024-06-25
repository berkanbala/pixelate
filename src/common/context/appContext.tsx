"use client";
import { createContext, useContext, useState } from "react";
import useModals from "../hooks/useModal";

export const MainContext = createContext<IAppContext>({} as any);
export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }: Props) => {
  const [auth, setAuth] = useState(false);
  const [users, setUsers] = useState("");
  const [pass, setPass] = useState("");

  const {
    signinModalVisible,
    setSigninModalVisible,
    signupModalVisible,
    setSignupModalVisible,
  } = useModals();

  return (
    <MainContext.Provider
      value={{
        user: {
          auth,
          setAuth,
          users,
          setUsers,
          pass,
          setPass,
        },
        modals: {
          signinModalVisible,
          setSigninModalVisible,
          signupModalVisible,
          setSignupModalVisible,
        },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

interface IAppContext {
  user: {
    auth: boolean;
    setAuth: (_val: boolean) => void;
    users: string;
    setUsers: any;
    pass: string;
    setPass: any;
  };

  modals: {
    signinModalVisible: boolean;
    setSigninModalVisible: (_val: boolean) => void;
    signupModalVisible: boolean;
    setSignupModalVisible: (_val: boolean) => void;
  };
}

interface Props {
  children: React.ReactNode;
}
