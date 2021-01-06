import { makeAutoObservable } from "mobx";
import { getProviderAndHook } from "utils";

export default class LolStore {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.counter++;
  };

  decrement = () => {
    this.counter--;
  };
}

export const [LolProvider, useLolStore] = getProviderAndHook(() => {
  return new LolStore();
});
