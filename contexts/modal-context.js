import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalContextProvider = (props) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModalHandler = () => {
    setmodalIsOpen(true);
    // console.log(`open`);
  };

  const closeModalHandler = () => {
    setmodalIsOpen(false);
  };

  const toggleModal = () => {
    setmodalIsOpen((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setmodalIsOpen,
        openModalHandler,
        closeModalHandler,
        toggleModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
const modalContxt = () => useContext(ModalContext);
export default modalContxt;
