import { makeAutoObservable } from "mobx";
import { getProviderAndHook } from "utils";

export default class ShellStore {
  numbers = [];

  constructor() {
    makeAutoObservable(this);
  }

  push = () => {
    this.numbers.push(Math.floor(Math.random() * 1000));
  };

  pop = () => {
    this.numbers.pop();
  };
}

export const [ShellProvider, useShellStore] = getProviderAndHook(() => {
  return new ShellStore();
});
