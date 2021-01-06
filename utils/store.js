import React from "react";
import { useLocalStore } from "mobx-react-lite";

export const getProviderAndHook = (createStoreFn) => {
  const storeContext = React.createContext(null);

  const Provider = (props) => {
    const { children } = props;

    const createStore = React.useCallback(createStoreFn, [createStoreFn]);

    const store = useLocalStore(createStore);
    return (
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    );
  };

  const useStore = () => {
    const store = React.useContext(storeContext);
    if (!store) {
      throw new Error("Provider is not set.");
    }
    return store;
  };

  return [Provider, useStore];
};
