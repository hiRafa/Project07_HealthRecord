import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalContextProvider = (props) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModalHandler = () => {
    setmodalIsOpen(true);
    console.log(`open`);
  };

  const closeModalHandler = () => {
    setmodalIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setmodalIsOpen,
        openModalHandler,
        closeModalHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
const modalContxt = () => useContext(ModalContext);
export default modalContxt;
