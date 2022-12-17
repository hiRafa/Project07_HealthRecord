import { useSession, signIn, signOut } from "next-auth/react";
import { createContext, useContext } from "react";

const SessionContext = createContext({});

export const SessionContextProvider = (props) => {
  const { data: session, status } = useSession();

  return (
    <SessionContext.Provider value={{ session, status, signIn, signOut }}>
      {props.children}
    </SessionContext.Provider>
  );
};
const useSes = () => useContext(SessionContext);
export default useSes;
