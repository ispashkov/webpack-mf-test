import React from "react";
import { useLocalStore } from "mobx-react-lite";

export const getProviderAndHook = (createStoreFn) => {
  const StoreContext = React.createContext(null);

  const Provider = ({ children }) => {
    const createStore = React.useCallback(createStoreFn, []);
    const store = useLocalStore(createStore);

    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

  const useStore = () => {
    const store = React.useContext(StoreContext);
    if (!store) {
      throw new Error("Provider is not set.");
    }
    return store;
  };

  return [Provider, useStore];
};
